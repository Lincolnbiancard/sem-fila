<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreteShippingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shipping', function (Blueprint $table) {
            $table->increments('id');
            $table->string('type_truck');
            $table->string('tracker'); 
            $table->string('extras'); 
            $table->string('number'); 
            $table->string('weight'); 
            $table->string('size'); 
            $table->string('type'); // ex: Plásticos, borracha e suas obras
            $table->string('status')->default('aberto'); 
            $table->string('material_handling'); //material de manuseio ex: caixa 
            $table->string('price');
            $table->string('type_payment');
            $table->string('init_route');
            $table->string('final_route');
            $table->integer('company_id')->unsigned();
            $table->foreign('company_id')
                ->references('id')
                ->on('company')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shipping');
    }
}
