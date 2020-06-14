<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
use App\Trucker;

class Reference extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'company_name',
        'contact',
        'phone',
        'trucker_id'
    ];

    public $table = 'references';

    public $timestamps = false;

    public function trucker()
    {
        return $this->hasOne(Trucker::class, 'id', 'trucker_id');
    }
}
