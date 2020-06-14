<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Reference;
use App\Address;

class Trucker extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'rntrc',
        'cnh',
        'cpf_cnpj',
        'rg',
        'crlv',
        'mopp',
        'user_id',
        'address_id'
    ];

    public $table = 'trucker';

    public $timestamps = false;

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function references()
    {
        return $this->hasMany(Reference::class, 'trucker_id', 'id');
    }

    public function address()
    {
        return $this->hasOne(Address::class, 'id', 'address_id');
    }

    public function truck()
    {
        return $this->hasOne(Truck::class, 'trucker_id', 'id');
    }
}
