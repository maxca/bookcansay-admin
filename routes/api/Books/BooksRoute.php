<?php

use Illuminate\Support\Facades\Route;

Route::group(
    [
        'prefix'     => 'v1/books',
        'namespace'  => 'Api\Books',
    ],
    function () use ($router) {
        $router->get('/', ['uses' => 'BooksController@index']);
        $router->post('/', ['uses' => 'BooksController@store']);
        $router->get('{id}', ['uses' => 'BooksController@show']);
        $router->put('{id}', ['uses' => 'BooksController@update']);
        $router->delete('{id}', ['uses' => 'BooksController@destroy']);
    }
);
