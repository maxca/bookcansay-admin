<?php

use Illuminate\Support\Facades\Route;

Route::group(
    [
        'prefix'     => 'v1/book_categories',
        'namespace'  => 'Api\BookCategories',
    ],
    function () use ($router) {
        $router->get('/', ['uses' => 'BookCategoriesController@index']);
        $router->post('/', ['uses' => 'BookCategoriesController@store']);
        $router->get('{id}', ['uses' => 'BookCategoriesController@show']);
        $router->put('{id}', ['uses' => 'BookCategoriesController@update']);
        $router->delete('{id}', ['uses' => 'BookCategoriesController@destroy']);
    }
);
