<?php

namespace App\Http\Controllers\Api\BookCategories;

use App\Http\Requests\BookCategories\Api\IndexBookCategoriesRequestApi;
use App\Http\Requests\BookCategories\Api\StoreBookCategoriesRequestApi;
use App\Http\Requests\BookCategories\Api\DetailBookCategoriesRequestApi;
use App\Http\Requests\BookCategories\Api\UpdateBookCategoriesRequestApi;
use App\Http\Requests\BookCategories\Api\DeleteBookCategoriesRequestApi;
use App\Repositories\BookCategories\BookCategoriesApiRepository;
use Samark\ModuleGenerate\Http\Controllers\ApiController;

/**
 * Class BookCategoriesController
 * @package App\Http\Controllers\Backend\BookCategories
 * @author samark chaisanguan <samarkchsngn@gmail.com>
 */
class BookCategoriesController extends ApiController
{

    /**
     * @var \App\Repositories\BookCategories\BookCategoriesApiRepository
     */
    private $repository;

    /**
     * BookCategoriesController constructor.
     * @param \App\Repositories\BookCategories\BookCategoriesApiRepository $repository
     */
    public function __construct(BookCategoriesApiRepository $repository)
    {
        $this->repository = $repository;
        parent::__construct();
    }

    /**
     * @param \App\Http\Requests\BookCategories\Api\IndexBookCategoriesRequestApi $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(IndexBookCategoriesRequestApi $request)
    {
        return $this->repository->index();
    }

    /**
     * @param \App\Http\Requests\BookCategories\Api\DetailBookCategoriesRequestApi $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(DetailBookCategoriesRequestApi $request, $id)
    {
        return $this->repository->detail($id);
    }

    /**
     * @param \App\Http\Requests\BookCategories\Api\StoreBookCategoriesRequestApi $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreBookCategoriesRequestApi $request)
    {
        return $this->repository->store($request->all());
    }

    /**
     * @param \App\Http\Requests\BookCategories\Api\UpdateBookCategoriesRequestApi $request
     * @param $id
     * @return mixed
     */
    public function update(UpdateBookCategoriesRequestApi $request, $id)
    {
        return $this->repository->update($id, $request->all());
    }

    /**
     * @param \App\Http\Requests\BookCategories\Api\DeleteBookCategoriesRequestApi $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(DeleteBookCategoriesRequestApi $request, $id)
    {
        return $this->repository->delete($id);
    }
}
