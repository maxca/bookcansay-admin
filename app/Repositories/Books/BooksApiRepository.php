<?php

namespace App\Repositories\Books;

use App\Transformers\BooksTransformer;
use Samark\ModuleGenerate\Repositories\Services\ApiRepositoryService;

/**
 * Class BooksApiRepository
 * @package App\Repositories\Books
 * @author samark chaisanguan <samarkchsngn@gmail.com>
 */
class BooksApiRepository extends ApiRepositoryService
{
    /**
     * BooksApiRepository constructor.
     * @param \App\Repositories\Books\BooksRepositoryEloquent $eloquent
     * @param \App\Transformers\BooksTransformer $transformer
     */
    public function __construct(
        BooksRepositoryEloquent $eloquent,
        BooksTransformer $transformer
    )
    {
        $this->eloquent    = $eloquent;
        $this->transformer = $transformer;
        parent::__construct();
    }
}