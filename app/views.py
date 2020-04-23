from django.shortcuts import render
from django.http import JsonResponse
import paralleldots
from django.views.decorators.csrf import csrf_exempt

paralleldots.set_api_key("Ql3xUPHD2C2XyQCRsBkPWaq65WFcBRShQ48gw9fngWE")
    

def Index(request):
    if request.method == "POST":
        sent = request.POST.get('sentiment')
        result = paralleldots.sentiment(sent, lang_code='en')['sentiment']
        result = dict(result)
        pos = result['positive']
        neg = result['negative']
        neu = result['neutral']
        data = {
            'positive' : pos,
            'negative' : neg,
            'neutral' : neu
        }
        return JsonResponse(data, safe = False)
    else:
        return render(request, 'index.html')
