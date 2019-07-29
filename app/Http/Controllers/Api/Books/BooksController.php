<?php

namespace App\Http\Controllers\Api\Books;

use App\Http\Requests\Books\Api\IndexBooksRequestApi;
use App\Http\Requests\Books\Api\StoreBooksRequestApi;
use App\Http\Requests\Books\Api\DetailBooksRequestApi;
use App\Http\Requests\Books\Api\UpdateBooksRequestApi;
use App\Http\Requests\Books\Api\DeleteBooksRequestApi;
use App\Repositories\Books\BooksApiRepository;
use Samark\ModuleGenerate\Http\Controllers\ApiController;

/**
 * Class BooksController
 * @package App\Http\Controllers\Backend\Books
 * @author samark chaisanguan <samarkchsngn@gmail.com>
 */
class BooksController extends ApiController
{

    /**
     * @var \App\Repositories\Books\BooksApiRepository
     */
    private $repository;

    /**
     * BooksController constructor.
     * @param \App\Repositories\Books\BooksApiRepository $repository
     */
    public function __construct(BooksApiRepository $repository)
    {
        $this->repository = $repository;
        parent::__construct();
    }

    /**
     * @param \App\Http\Requests\Books\Api\IndexBooksRequestApi $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(IndexBooksRequestApi $request)
    {
        return $this->repository->index();
    }

    /**
     * @param \App\Http\Requests\Books\Api\DetailBooksRequestApi $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(DetailBooksRequestApi $request, $id)
    {
        return $this->repository->detail($id);
    }

    /**
     * @param \App\Http\Requests\Books\Api\StoreBooksRequestApi $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreBooksRequestApi $request)
    {
        return $this->repository->store($request->all());
    }

    /**
     * @param \App\Http\Requests\Books\Api\UpdateBooksRequestApi $request
     * @param $id
     * @return mixed
     */
    public function update(UpdateBooksRequestApi $request, $id)
    {
        return $this->repository->update($id, $request->all());
    }

    /**
     * @param \App\Http\Requests\Books\Api\DeleteBooksRequestApi $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(DeleteBooksRequestApi $request, $id)
    {
        return $this->repository->delete($id);
    }
}
