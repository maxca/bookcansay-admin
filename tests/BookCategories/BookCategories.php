<?php

use Tests\BaseTestCase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Models\BookCategories;

class BookCategoriesTest extends BaseTestCase
{
    # use faker for mocking data
    use WithFaker;

    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function testGetRoleListSuccess()
    {
        $response = $this->get('/api/v1/book_categoriess')->getContent();
        $this->assertJson($response);
    }

    public function testCreateRoleSuccess()
    {
        $response = $this->post('/api/v1/book_categoriess', $this->getRoleData())->getContent();
        $this->assertJson($response);
    }

    public function getBookCategoriesData(): array
    {
        return array(
        );
    }

    public function testUpdateBookCategoriesSuccess()
    {
        $book_categories     = factory(BookCategories::class)->create();
        $response = $this->put('/api/v1/book_categoriess/' . $book_categories->id, $book_categories->toArray())->getContent();
        $this->assertJson($response);
    }

    public function testDeleteBookCategoriesSuccess()
    {
        $book_categories     = factory(BookCategories::class)->create();
        $response = $this->delete('/api/v1/book_categoriess/' . $book_categories->id);
    }
}