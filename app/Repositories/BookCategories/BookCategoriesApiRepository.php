<?php

namespace App\Repositories\BookCategories;

use App\Transformers\BookCategoriesTransformer;
use Samark\ModuleGenerate\Repositories\Services\ApiRepositoryService;

/**
 * Class BookCategoriesApiRepository
 * @package App\Repositories\BookCategories
 * @author samark chaisanguan <samarkchsngn@gmail.com>
 */
class BookCategoriesApiRepository extends ApiRepositoryService
{
    /**
     * BookCategoriesApiRepository constructor.
     * @param \App\Repositories\BookCategories\BookCategoriesRepositoryEloquent $eloquent
     * @param \App\Transformers\BookCategoriesTransformer $transformer
     */
    public function __construct(
        BookCategoriesRepositoryEloquent $eloquent,
        BookCategoriesTransformer $transformer
    )
    {
        $this->eloquent    = $eloquent;
        $this->transformer = $transformer;
        parent::__construct();
    }
}