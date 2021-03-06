@extends('module-generate::modules.master')

@section('content')
    <div class="row">
        <a href="{{url('icon/create')}}" class="btn btn-sm btn-success"> create</a>
    </div>
    <div class="row  justify-content-center">

        <table class="table table-responsive-sm table-bordered table-sm">
            <tr>
                <th>id</th>
                <th>name</th>
                <th>status</th>
                <th>action</th>
            </tr>
            @foreach($data as $key =>  $item)
                <tr>
                    <td>{{++ $key}}</td>
                    <td> <i class="{{$item->name}}"></i>{{$item->name}}</td>
                    <td>{{$item->status}}</td>
                    <td>
                        <a href="{{route('module-generate::icon.delete',['id' => $item->id])}}" class="btn btn-sm btn-danger"> delete</a>
                    </td>
                </tr>
            @endforeach

        </table>

    </div>
@endsection