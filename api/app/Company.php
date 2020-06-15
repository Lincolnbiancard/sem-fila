<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type',
        'name',
        'trade_name',
        'user_id',
        'address_id'
    ];

    public $table = 'company';

    public $timestamps = false;

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function address()
    {
        return $this->hasOne(Address::class, 'id', 'address_id');
    }
}
