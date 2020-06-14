<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShippingNegociatiomTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shipping_negociation', function (Blueprint $table) {
            $table->id();
            $table->integer('trucker_id')->unsigned();
            $table->foreign('trucker_id')
                ->references('id')
                ->on('trucker')
                ->onDelete('cascade');
            $table->integer('shipping_id')->unsigned();
            $table->foreign('shipping_id')
                ->references('id')
                ->on('shipping')
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
        Schema::dropIfExists('shipping_negociation');
    }
}
