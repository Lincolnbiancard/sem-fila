<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Shipping;

class ShippingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Shipping::paginate(100);
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
            $data               = $request->all();
            $shipping        = new Shipping;
            $data['user_id']    = 1001; //Trocar por Auth::id()
            $createdshipping = $shipping->create($data);

            return response()->json([$createdshipping]);
        } catch (\Throwable $th) {
            return response()->json([
                'Values required' => [
                    'type_truck',
                    'tracker',
                    'extras',
                    'number',
                    'weight',
                    'size',
                    'type',
                    'material_handling',
                    'price',
                    'type_payment',
                    'init_route',
                    'final_route',
                    'trucker_id',
                    'company_id'
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
        $shipping = Shipping::findOrFail($id);

        return response()->json($shipping);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
