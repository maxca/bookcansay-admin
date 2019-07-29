<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableBooks extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('book_category_id')->nullable();
            $table->integer('book_author_id')->nullable();
            $table->integer('book_publisher_id')->nullable();
            $table->string('name')->nullable();
            $table->integer('total_chapter')->nullable();
            $table->integer('total_page')->nullable();
            $table->string('cover_page')->nullable();
            $table->longText('description')->null();
            $table->enum('status',['active','inactive']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
