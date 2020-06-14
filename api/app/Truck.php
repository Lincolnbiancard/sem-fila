<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
use App\User;

class Truck extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'capacity',
        'truck_plate',
        'type_truck',
        'support',
        'trucker_id'
    ];

    public $table = 'truck';

    public $timestamps = false;

}
