<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Auth::routes();

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user(); 
});

Route::resource('/empresas', 'CompanyController');
Route::resource('/enderecos', 'AddressController');
Route::resource('/negociacao', 'ShippingController');


Route::group(['middleware' => 'auth:api'], function() {
    //Rotas autenticadas
    Route::resource('/caminhoneiros', 'TruckerController'); 
});


