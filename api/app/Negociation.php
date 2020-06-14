<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Reference;
use App\Address;

class shipping extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
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
    ];

    public $table = 'shipping';

    public $timestamps = false;

    public function user()
    {
        return $this->hasMany(User::class, 'id', 'user_id');
    }

}
