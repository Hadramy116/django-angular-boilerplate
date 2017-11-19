from django.views.generic import TemplateView


class IndexView(TemplateView):
    """
    Serves Template with AngularJs
    """
    template_name = 'dist/index.html'
