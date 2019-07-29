<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Samark\ModuleGenerate\Contracts\HasTranslations;

/**
 * Class BookCategories
 * @package App\Models
 * @author samark chaisanguan <samarkchsngn@gmail.com>
 */
class BookCategories extends Model
{

    use HasTranslations;

    protected $connection = 'front';

    /**
     * @var string
     */
    protected $table = 'book_categories';

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
        'id',
        'name',

    );

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = array();

}
