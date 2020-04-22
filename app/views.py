from django.shortcuts import render
from django.http import JsonResponse
import paralleldots
# Create your views here.

paralleldots.set_api_key("Ql3xUPHD2C2XyQCRsBkPWaq65WFcBRShQ48gw9fngWE")


def Index(request):
    if(request.method == "POST"):
        sentiment = request.POST.get('sentiment')
        result = paralleldots.sentiment(sentiment, lang_code='en')['sentiment']
        return render(request, 'index.html', dict(result))
    else:
        return render(request, 'index.html')
