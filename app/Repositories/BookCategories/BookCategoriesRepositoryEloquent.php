<?php

namespace App\Repositories\BookCategories;

use Samark\ModuleGenerate\Contracts\Repository;
use App\Interfaces\BookCategoriesRepository;
use App\Models\BookCategories;

/**
 * Class BookCategoriesRepositoryEloquent
 * @package namespace App\Repositories;
 */
class BookCategoriesRepositoryEloquent extends Repository implements BookCategoriesRepository
{
    /**
     * Set column for searching.
     */
    protected $fieldSearchable = [];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return BookCategories::class;
    }

}
