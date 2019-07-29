<?php

namespace App\Transformers;

use App\Models\Books;
use League\Fractal\TransformerAbstract;

/**
 * Class BooksTransformer
 * @package App\Transformers
 * @author samark chaisanguan <samarkchsngn@gmail.com>
 */
class BooksTransformer extends TransformerAbstract
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
     * @param \App\Models\Books $books
     * @return array
     */
    public function transform(Books $books)
    {
        $format = [
            'id'   => $books->id,
            'name' => $books->name,
        ];
        return $format;
    }
}
