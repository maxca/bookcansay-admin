<?php

/**
 * Factory
 * @author samark chaisanguan <samarkchsngn@gmail.com>
 */


$factory->define(App\Models\Books::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
    ];
});
