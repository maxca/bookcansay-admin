<?php

namespace App\Repositories\Books;

use Samark\ModuleGenerate\Contracts\Repository;
use App\Interfaces\BooksRepository;
use App\Models\Books;

/**
 * Class BooksRepositoryEloquent
 * @package namespace App\Repositories;
 */
class BooksRepositoryEloquent extends Repository implements BooksRepository
{
    /**
     * Set column for searching.
     */
    protected $fieldSearchable = [
        'book_category_id' => '=',
        'book_author_id' => '=',
        'book_publisher_id' => '=',
        'name' => 'like',
        'total_chapter' => '=',
        'total_page' => '=',
        'cover_page' => '=',
        'description' => '=',
        'status' => '=',
        ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Books::class;
    }

}
