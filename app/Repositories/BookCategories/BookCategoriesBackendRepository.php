<?php

namespace App\Repositories\BookCategories;

use Samark\ModuleGenerate\Repositories\Services\BackendService;

/**
 * Class BookCategoriesBackendRepository
 * @package App\Repositories\BookCategories
 * @author samark chaisanguan <samarkchsngn@gmail.com>
 */
class BookCategoriesBackendRepository extends BackendService
{
    /**
     * @var \App\Repositories\BookCategories\BookCategoriesRepositoryEloquent
     */
    protected $eloquent;

    /**
     * @var string container name
     * relate for alias routing
     */
    protected $containerName = 'book_categories';

    /**
     * @var array
     */
    protected $views = [
        'index'  => 'BookCategories.index',
        'show'   => 'BookCategories.show',
        'create' => 'BookCategories.create',
        'edit'   => 'BookCategories.edit',
        'export' => 'BookCategories.export',
    ];

    /**
     * @var array
     */
    protected $routes = [
        'list'     => 'book_categories.list',
        'download' => 'book_categories.download',
    ];

    /** @var array
     * set relation display
     *
    protected $overrideColumn = [
        'category_id' => [
            'model'   => Media_category::class,
            'key'     => 'category_id',
            'message' => 'select category',
            'pluck'   => [
                'id'   => 'id',
                'name' => 'name',
            ],
        ]
    ];
     */

    /** @var array
     * set relation display
     *
    protected $relations = [
        'category_id' => [
            'has'   => 'category',
            'value' => 'name',
            'name'  => 'category',
        ],
    ];
     */


    /**
     * @var string export filename
     */
    protected $downloadFilename = 'book_categories_export';

    /**
     * BookCategoriesBackendRepository constructor.
     * @param \App\Repositories\BookCategories\BookCategoriesRepositoryEloquent $eloquent
     */
    public function __construct(BookCategoriesRepositoryEloquent $eloquent)
    {
        $this->eloquent = $eloquent;
        parent::__construct();
    }

}
