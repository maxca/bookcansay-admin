<?php

use Illuminate\Support\Facades\Route;

Route::group(
    [
        'prefix'     => config(CONFIG_NAME . '.backend.link') .'/books',
        'namespace'  => 'Backend\Books',
        'as'         => 'books.'
    ],
    function () use ($router) {
        $router->get('/', ['uses' => 'BooksBackendController@index'])->name('list');
        $router->post('/create', ['uses' => 'BooksBackendController@store'])->name('store');
        $router->get('/create', ['uses' => 'BooksBackendController@create'])->name('create');
        $router->get('/export', ['uses' => 'BooksBackendController@export'])->name('export');
        $router->get('{id}', ['uses' => 'BooksBackendController@show'])->name('detail');
        $router->get('/edit/{id}', ['uses' => 'BooksBackendController@edit'])->name('edit');
        $router->post('/edit/{id}', ['uses' => 'BooksBackendController@update'])->name('update');
        $router->delete('{id}', ['uses' => 'BooksBackendController@delete'])->name('delete');
    }
);
