from rest_framework import viewsets, generics

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import TaskSerializer

from .models import Task

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        '---------------------------------': '---------------------------------',
        'list': '/task-list/',
        'detail view': '/task-detail/<str:pk>',
        'Create': '/task-create/',
        'Update': '/task-update/<str:pk>',
        'Delete': '/task-delete/<str:pk>',
    }
    return Response(api_urls)


# @api_view(['GET'])
# def taskList(request):
#     tasks = Task.objects.all()
#     # tasks = Task.objects.filter(owner=request.user)
#     serializer = TaskSerializer(tasks, many=True)
#     permission_class = [permissions.IsAuthenticated]
#     # print(permission_class)
#     return Response(serializer.data)

# @api_view(['GET'])
class taskList(viewsets.ViewSet):
    # tasks = TaskSerializer("")
    # serializer_class = TaskSerializer

    def list(self, request, *args, **kwargs):
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        # tasks = self.get_queryset()
        # username = TaskSerializer.get_username(obj=tasks)
        # print(username)
        return Response(serializer.data)
#     # tasks = Task.objects.filter(owner=request.user)
#     serializer = TaskSerializer(tasks, many=True)
#     permission_class = [permissions.IsAuthenticated]
#     # print(permission_class)
#     return Response(serializer.data)


@api_view(['GET'])
def taskDetail(request, pk):
    task = Task.objects.get(id=pk)
    # obj.owner = self.request.user
    tasks = TaskSerializer(task, many=False)
    return Response(tasks.data)

# @api_view(['POST'])
# def taskCreate(request):
#     serializer = TaskSerializer( data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)


class taskCreateView(generics.GenericAPIView):
    serializer_class = TaskSerializer

    def post(self, request, *args, **kwargs):
        serializer = TaskSerializer(data=request.data, context={
                                    "author": self.request.user})
        # if serializer.is_valid():
        #     serializer.save()
        serializer.is_valid(raise_exception=True)
        serializer.save()
        print("serializer saved")
        # task = TaskSerializer.createIt(validated_data=serializer.data)
        # return Response({'task created':{task}})
        return Response({'task created': "done", 'user_info': {
            'data': serializer.data
        }, })


# @api_view(['PUT'])
@api_view(['POST'])
def taskUpdate(request, pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerializer(instance=task, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def taskDelete(request, pk):
    task = Task.objects.get(id=pk)
    task.delete()
    return Response('Item deleteed successfully')
