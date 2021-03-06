<?php

namespace App\Http\Requests\Backend\BookCategories;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class DeleteBookCategoriesRequest
 * @package App\Http\Requests\Backend\BookCategories
 * @author samark chaisanguan <samarkchsngn@gmail.com>
 */

class DeleteBookCategoriesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
        // return $this->hasRoles(['admin']) ||
        // $this->hasPermissions(['book_categories.delete']) ||
        // $this->hasPermissions(['book_categories.*']);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
       return [];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        return [
           #'name.required' => ':attribute is required'
        ];

    }

    public function attributes()
    {
        return [
            #'name' => trans('unit.name'),
        ];
    }
}
