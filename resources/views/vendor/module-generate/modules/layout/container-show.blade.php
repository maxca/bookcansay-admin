<div class="row container-fluid justify-content-md-center">
    <div class="col-md-10">
        <div class="card">
            <table class="table table-striped">
                @foreach($data->toArray() as $key => $item)
                    <tr>
                        <td class="border-right" width="100px">{{genLabel($key)}}</td>
                        @if(in_array($key ,$images))
                            <td><img src="{{asset($item)}}" class="img-thumbnail" alt=""></td>
                        @else
                            @if(array_key_exists($key, $relations))
                                <td>{{ $data->{$relations[$key]['has']}->{$relations[$key]['value']} }}</td>
                            @else
                                <td>{{$item}}</td>
                            @endif
                        @endif
                    </tr>
                @endforeach
            </table>
        </div>
    </div>
</div>

