<?php

namespace App\Http\Controllers\Backend\BookCategories;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\BookCategories\StoreBookCategoriesRequest;
use App\Http\Requests\Backend\BookCategories\IndexBookCategoriesRequest;
use App\Http\Requests\Backend\BookCategories\DetailBookCategoriesRequest;
use App\Http\Requests\Backend\BookCategories\UpdateBookCategoriesRequest;
use App\Http\Requests\Backend\BookCategories\DeleteBookCategoriesRequest;
use App\Repositories\BookCategories\BookCategoriesBackendRepository;

/**
 * Class BookCategoriesBackendController
 * @package App\Http\Controllers
 * @author samark chaisanguan <samarkchsngn@gmail.com>
 */
class BookCategoriesBackendController extends Controller
{
    /**
     * @var \App\Repositories\BookCategories\BookCategoriesBackendRepository
     */
    protected $repository;

    /**
     * ModuleBackendController constructor.
     * @param \App\Repositories\BookCategories\BookCategoriesBackendRepository $repository
     */
    public function __construct(BookCategoriesBackendRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param \App\Http\Requests\Backend\BookCategories\IndexBookCategoriesRequest $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View|mixed|string
     * @throws \Throwable
     */
    public function index(IndexBookCategoriesRequest $request)
    {
        return $this->repository->index();
    }

    /**
     * @param \App\Http\Requests\Backend\BookCategories\DetailBookCategoriesRequest $request
     * @param $id
     * @return mixed
     */
    public function show(DetailBookCategoriesRequest $request, $id)
    {
        return $this->repository->show($id);
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View|mixed|string
     * @throws \Throwable
     */
    public function create()
    {
        return $this->repository->create();
    }

    /**
     * @param \App\Http\Requests\Backend\BookCategories\StoreBookCategoriesRequest $request
     * @return mixed|void
     */
    public function store(StoreBookCategoriesRequest $request)
    {
        return $this->repository->store($request->all());
    }

    /**
     * @param \App\Http\Requests\Backend\BookCategories\UpdateBookCategoriesRequest $request
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View|mixed|string
     * @throws \Throwable
     */
    public function edit(UpdateBookCategoriesRequest $request, $id)
    {
        return $this->repository->edit($id);
    }

    /**
     * @param \App\Http\Requests\Backend\BookCategories\UpdateBookCategoriesRequest $request
     * @param $id
     * @return mixed|void
     */
    public function update(UpdateBookCategoriesRequest $request, $id)
    {
        return $this->repository->update($id, $request->all());
    }

    /**
     * @param \App\Http\Requests\Backend\BookCategories\DeleteBookCategoriesRequest $request
     * @param $id
     * @return mixed|void
     */
    public function delete(DeleteBookCategoriesRequest $request, $id)
    {
        return $this->repository->delete($id);
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View|mixed|string
     * @throws \Throwable
     */
    public function export()
    {
        return $this->repository->export();
    }
}
