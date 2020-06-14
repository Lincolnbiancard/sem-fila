<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'street',
        'type_address', // ex: apartamento, casa, condomínio
        'number',
        'zip_code',
        'city',
        'state'
    ];

    public $table = 'addresses';

    public $timestamps = false;

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
