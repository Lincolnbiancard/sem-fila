<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Trucker;
use App\User;
use App\Truck;
use App\Address;
use App\Reference;


class TruckerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Trucker::with('user', 'address', 'truck', 'references')->paginate(100);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {

            $data                   = $request->all();
            //Salva o endereço 
            $address                = new Address();
            $createdAddress         = $address->create($data);

            //Salva o caminhoneiro
            $trucker                = new Trucker;
            $data['user_id']        = Auth::id(); 
            $data['address_id']     = $createdAddress->id; 
            $createdTrucker         = $trucker->create($data);

            //Salva o caminhão 
            $truck                  = new Truck();
            $data['trucker_id']     = $createdTrucker->id;
            $createdTruck           = $truck->create($data);

            // Salva as referências
            $reference              = new Reference();
            $createdReference       = $reference->create($data);

            return response()->json([$createdTrucker, $createdAddress, $createdTruck, $createdReference]);
        } catch (\Throwable $th) {
            return response()->json([
                'Values required' => [
                    'rntrc',
                    'cnh',
                    'rg',
                    'crlv',
                    'mopp',
                    'capacity',
                    'truck_plate',
                    'type_truck',
                    'support',
                    'user_id',
                    'street',
                    'type_address',
                    'number',
                    'zip_code',
                    'city',
                    'state',
                    'company_name',
                    'contact',
                    'phone',
                ],
                'message' => $th
            ]);
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $trucker = Trucker::with('user', 'address', 'truck', 'references')->findOrFail($id);

        return response()->json($trucker);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        try {
            $trucker            = Trucker::findOrFail($id);
            $data               = $request->all();
            $updatedTrucker     = $trucker->update($data);

            return response()->json(['success' => $updatedTrucker]);
        } catch (\Throwable $th) {
            return response()->json([
                'Values required' => [
                    'rntrc',
                    'cnh',
                    'cpf_cnpj',
                    'rg',
                    'crlv',
                    'mopp'
                ]
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deletedTrucker = Trucker::where('id', $id)->delete();

        $success = '';
        
        if($deletedTrucker == 1) {
            $success = true;
        } else {
            $success = false;
        }

        return response()->json(['success' => $success]);
    }
}
