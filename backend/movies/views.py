from rest_framework import viewsets

from movies.models import Movie
from movies.serializers import MovieSerializer


class MovieViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing movie instances.
    """
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()
