<?php

use Tests\BaseTestCase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Models\Books;

class BooksTest extends BaseTestCase
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
        $response = $this->get('/api/v1/bookss')->getContent();
        $this->assertJson($response);
    }

    public function testCreateRoleSuccess()
    {
        $response = $this->post('/api/v1/bookss', $this->getRoleData())->getContent();
        $this->assertJson($response);
    }

    public function getBooksData(): array
    {
        return array(
        );
    }

    public function testUpdateBooksSuccess()
    {
        $books     = factory(Books::class)->create();
        $response = $this->put('/api/v1/bookss/' . $books->id, $books->toArray())->getContent();
        $this->assertJson($response);
    }

    public function testDeleteBooksSuccess()
    {
        $books     = factory(Books::class)->create();
        $response = $this->delete('/api/v1/bookss/' . $books->id);
    }
}