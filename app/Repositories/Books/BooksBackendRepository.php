<?php

namespace App\Repositories\Books;

use App\Models\BookCategories;
use Samark\ModuleGenerate\Repositories\Services\BackendService;

/**
 * Class BooksBackendRepository
 * @package App\Repositories\Books
 * @author samark chaisanguan <samarkchsngn@gmail.com>
 */
class BooksBackendRepository extends BackendService
{
    /**
     * @var \App\Repositories\Books\BooksRepositoryEloquent
     */
    protected $eloquent;

    /**
     * @var string container name
     * relate for alias routing
     */
    protected $containerName = 'books';

    /**
     * @var array
     */
    protected $views = [
        'index'  => 'books.index',
        'show'   => 'books.show',
        'create' => 'books.create',
        'edit'   => 'books.edit',
        'export' => 'books.export',
    ];

    /**
     * @var array
     */
    protected $routes = [
        'list'     => 'books.list',
        'download' => 'books.export',
        'export' => 'books.export',
    ];

    /** @var array
     * set relation display
     */
    protected $overrideColumn = [
        'book_category_id' => [
            'model'   => BookCategories::class,
            'key'     => 'category_id',
            'message' => 'select category',
            'pluck'   => [
                'id'   => 'id',
                'name' => 'name',
            ],
        ],'book_author_id' => [
            'model'   => BookCategories::class,
            'key'     => 'category_id',
            'message' => 'select author',
            'pluck'   => [
                'id'   => 'id',
                'name' => 'name',
            ],
        ],'book_publisher_id' => [
            'model'   => BookCategories::class,
            'key'     => 'category_id',
            'message' => 'select publisher',
            'pluck'   => [
                'id'   => 'id',
                'name' => 'name',
            ],
        ],
    ];


    /** @var array
     * set relation display
     */
    protected $relations = [
        'book_category_id' => [
            'has'   => 'category',
            'value' => 'name',
            'name'  => 'category',
        ],
    ];



    /**
     * @var string export filename
     */
    protected $downloadFilename = 'books_export';

    /**
     * BooksBackendRepository constructor.
     * @param \App\Repositories\Books\BooksRepositoryEloquent $eloquent
     */
    public function __construct(BooksRepositoryEloquent $eloquent)
    {
        $this->eloquent = $eloquent;
        parent::__construct();
    }

}
