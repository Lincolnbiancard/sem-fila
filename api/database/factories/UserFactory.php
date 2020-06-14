<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;
use App\Trucker;
use App\Company;
use App\Reference;
use App\Address;
use App\Truck;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
    ];
});

$factory->define(Trucker::class, function (Faker $faker) {
    return [
        'rntrc'         => $faker->numberBetween(100, 1000000),
        'cnh'           => $faker->numberBetween(10000, 1000000),
        'cpf_cnpj'      => $faker->numberBetween(10000, 1000000),
        'rg'            => $faker->numberBetween(10000, 1000000),
        'crlv'          => $faker->numberBetween(10000, 1000000),
        'mopp' => $faker->numberBetween(10000, 1000000),
        'user_id' => $faker->numberBetween(1, 1000)
    ];
});

$factory->define(Reference::class, function (Faker $faker) {
    return [
        'company_name' => $faker->domainName(),
        'contact'      => $faker->name(),
        'phone'        => $faker->phoneNumber(),
        'trucker_id'   => $faker->numberBetween(1, 1000)
    ];
});

$factory->define(Company::class, function (Faker $faker) {
    return [
        'cnpj'          => $faker->ean13(),
        'type'          => $faker->jobTitle(),
        'name'          => $faker->catchPhrase(),
        'trade_name'    => $faker->company(),
        'user_id'       => $faker->numberBetween(1, 1000),
    ];
});

$factory->define(Address::class, function (Faker $faker) {
    return [
        'street'        => $faker->streetName(),
        'type'          => $faker->secondaryAddress(),
        'number'        => $faker->catchPhrase(),
        'zip_code'      => $faker->postcode(),
        'city'          => $faker->city(),
        'state'         => $faker->state(),
        'user_id'       => $faker->numberBetween(1, 1000),
    ];
});

$factory->define(Truck::class, function (Faker $faker) {
    return [
        'capacity'        => $faker->numberBetween(1, 100000),
        'truck_plate'     => $faker->secondaryAddress(),
        'type'            => $faker->catchPhrase(),
        'support'         => $faker->postcode(),
        'user_id'         => $faker->numberBetween(1, 1000),
    ];
});