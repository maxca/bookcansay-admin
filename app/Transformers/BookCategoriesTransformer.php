<?php

namespace App\Transformers;

use App\Models\BookCategories;
use League\Fractal\TransformerAbstract;

/**
 * Class BookCategoriesTransformer
 * @package App\Transformers
 * @author samark chaisanguan <samarkchsngn@gmail.com>
 */
class BookCategoriesTransformer extends TransformerAbstract
{
    /**
     * @var array
     */
    protected $availableIncludes = [];

    /**
     * @var array
     */
    protected $defaultIncludes = [];

    /**
     * @param \App\Models\BookCategories $book_categories
     * @return array
     */
    public function transform(BookCategories $book_categories)
    {
        $format = [
            'id'   => $book_categories->id,
            'name' => $book_categories->name,
        ];
        return $format;
    }
}
