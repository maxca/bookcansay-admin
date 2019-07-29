<?php

namespace App\Http\Requests\Books\Api;

use Samark\ModuleGenerate\Contracts\FormRequest;

/**
 * Class DeleteBooksRequestApi
 * @package App\Http\Requests\Books\Api
 * @author samark chaisanguan <samarkchsngn@gmail.com>
 */

class DeleteBooksRequestApi extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
       return true;
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
        return [];

    }

    public function attributes()
    {
        return [];
    }
}
