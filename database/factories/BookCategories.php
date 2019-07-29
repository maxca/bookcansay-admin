<?php

/**
 * Factory
 * @author samark chaisanguan <samarkchsngn@gmail.com>
 */


$factory->define(App\Models\BookCategories::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
    ];
});
