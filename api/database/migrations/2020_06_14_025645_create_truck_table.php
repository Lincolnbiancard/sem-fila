<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTruckTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('truck', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('capacity');
            $table->string('truck_plate'); // placa do caminhão
            $table->string('type_truck'); // tipo do caminhão
            $table->string('support'); // carroceria
            $table->integer('trucker_id')->unsigned();
            $table->foreign('trucker_id')
                ->references('id')
                ->on('trucker')
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
        Schema::dropIfExists('truck');
    }
}
