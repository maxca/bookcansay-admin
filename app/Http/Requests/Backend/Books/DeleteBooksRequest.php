<?php

namespace App\Http\Requests\Backend\Books;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class DeleteBooksRequest
 * @package App\Http\Requests\Backend\Books
 * @author samark chaisanguan <samarkchsngn@gmail.com>
 */

class DeleteBooksRequest extends FormRequest
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
        // $this->hasPermissions(['books.delete']) ||
        // $this->hasPermissions(['books.*']);
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
