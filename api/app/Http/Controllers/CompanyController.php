<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Company;
use App\User;
use App\Address;

class CompanyController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::with('company', 'address')->paginate(100);
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
            $company            = new Company;
            $data['user_id']    = Auth::id(); //Trocar por Auth::id()
            $createdCompany     = $company->create($data);
            
            
            return response()->json($createdCompany);
        } catch (\Throwable $th) {
            return response()->json([
                'type_route' => 'post',
                'Values required' => [
                    'cnpj',
                    'type',
                    'name',
                    'trade_name',
                    'user_id',
                ]
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
        $trucker = User::with(['company', 'address'])->findOrFail($id);

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
            $company            = Company::findOrFail($id);
            $data               = $request->all();
            $updatedCompany     = $company->update($data);

            return response()->json(['success' => $updatedCompany]);
        } catch (\Throwable $th) {
            return response()->json([
                'type_route' => 'PUT',
                'Values required' => [
                    'cnpj',
                    'type',
                    'name',
                    'trade_name',
                    'user_id',
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
        $deletedId = User::where('id', $id)->delete();

        $success = '';
        
        if($deletedId == 1) {
            $success = true;
        } else {
            $success = false;
        }

        return response()->json(['success' => $success]);
    }
}