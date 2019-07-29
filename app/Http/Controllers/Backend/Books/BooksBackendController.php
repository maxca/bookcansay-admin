<?php

namespace App\Http\Controllers\Backend\Books;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Books\StoreBooksRequest;
use App\Http\Requests\Backend\Books\IndexBooksRequest;
use App\Http\Requests\Backend\Books\DetailBooksRequest;
use App\Http\Requests\Backend\Books\UpdateBooksRequest;
use App\Http\Requests\Backend\Books\DeleteBooksRequest;
use App\Repositories\Books\BooksBackendRepository;

/**
 * Class BooksBackendController
 * @package App\Http\Controllers
 * @author samark chaisanguan <samarkchsngn@gmail.com>
 */
class BooksBackendController extends Controller
{
    /**
     * @var \App\Repositories\Books\BooksBackendRepository
     */
    protected $repository;

    /**
     * ModuleBackendController constructor.
     * @param \App\Repositories\Books\BooksBackendRepository $repository
     */
    public function __construct(BooksBackendRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param \App\Http\Requests\Backend\Books\IndexBooksRequest $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View|mixed|string
     * @throws \Throwable
     */
    public function index(IndexBooksRequest $request)
    {
        return $this->repository->index();
    }

    /**
     * @param \App\Http\Requests\Backend\Books\DetailBooksRequest $request
     * @param $id
     * @return mixed
     */
    public function show(DetailBooksRequest $request, $id)
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
     * @param \App\Http\Requests\Backend\Books\StoreBooksRequest $request
     * @return mixed|void
     */
    public function store(StoreBooksRequest $request)
    {
        return $this->repository->store($request->all());
    }

    /**
     * @param \App\Http\Requests\Backend\Books\UpdateBooksRequest $request
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View|mixed|string
     * @throws \Throwable
     */
    public function edit(UpdateBooksRequest $request, $id)
    {
        return $this->repository->edit($id);
    }

    /**
     * @param \App\Http\Requests\Backend\Books\UpdateBooksRequest $request
     * @param $id
     * @return mixed|void
     */
    public function update(UpdateBooksRequest $request, $id)
    {
        return $this->repository->update($id, $request->all());
    }

    /**
     * @param \App\Http\Requests\Backend\Books\DeleteBooksRequest $request
     * @param $id
     * @return mixed|void
     */
    public function delete(DeleteBooksRequest $request, $id)
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
