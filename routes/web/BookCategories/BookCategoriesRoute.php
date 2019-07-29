<?php

use Illuminate\Support\Facades\Route;

Route::group(
    [
        'prefix'     => config(CONFIG_NAME . '.backend.link') .'/book_categories',
        'namespace'  => 'Backend\BookCategories',
        'as'         => 'book_categories.'
    ],
    function () use ($router) {
        $router->get('/', ['uses' => 'BookCategoriesBackendController@index'])->name('list');
        $router->post('/create', ['uses' => 'BookCategoriesBackendController@store'])->name('store');
        $router->get('/create', ['uses' => 'BookCategoriesBackendController@create'])->name('create');
        $router->get('/export', ['uses' => 'BookCategoriesBackendController@export'])->name('export');
        $router->get('{id}', ['uses' => 'BookCategoriesBackendController@show'])->name('detail');
        $router->get('/edit/{id}', ['uses' => 'BookCategoriesBackendController@edit'])->name('edit');
        $router->post('/edit/{id}', ['uses' => 'BookCategoriesBackendController@update'])->name('update');
        $router->delete('{id}', ['uses' => 'BookCategoriesBackendController@delete'])->name('delete');
    }
);
