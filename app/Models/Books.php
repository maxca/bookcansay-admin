<?php

namespace App\Models;

use App\BookCategory;
use Illuminate\Database\Eloquent\Model;
use Samark\ModuleGenerate\Contracts\HasTranslations;

/**
 * Class Books
 * @package App\Models
 * @author samark chaisanguan <samarkchsngn@gmail.com>
 */
class Books extends Model
{

    use HasTranslations;

    protected $connection = 'front';

    /**
     * @var string
     */
    protected $table = 'books';

    /**
     * @var array
     */
    public $translatable = [];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = array(
        'book_category_id',
		'book_author_id',
		'book_publisher_id',
		'name',
		'total_chapter',
		'total_page',
		'cover_page',
		'description',
		'status',

    );

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = array();

    public function category()
    {
        return $this->hasOne(BookCategories::class,'id','book_category_id');
    }

}
