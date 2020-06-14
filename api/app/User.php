<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use App\Trucker;
use App\Reference;
use App\Address;
use App\Company;
use App\Truck;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'type', 'image'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function trucker()
    {
        return $this->hasOne(Trucker::class, 'user_id', 'id');
    }

    public function references()
    {
        return $this->belongsToMany(Trucker::class, Reference::class, 'trucker_id', 'id');
    }

    public function address()
    {
        return $this->hasOne(Address::class, 'user_id', 'id');
    }

    public function truck()
    {
        return $this->hasMany(Truck::class, 'user_id', 'id');
    }
    
    
    public function company()
    {
        return $this->hasOne(Company::class, 'user_id', 'id');
    }
}
