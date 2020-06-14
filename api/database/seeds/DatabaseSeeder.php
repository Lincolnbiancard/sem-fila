<?php

use Illuminate\Database\Seeder;
use App\Trucker;
use App\User;
use App\Reference;
use App\Company;
use App\Address;
use App\Truck;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        factory(User::class, 1000)->create();
        factory(Trucker::class, 1000)->create();
        factory(Reference::class, 1000)->create();
        factory(Company::class, 1000)->create();
        factory(Address::class, 1000)->create();
        factory(Truck::class, 1000)->create();
    }
}
