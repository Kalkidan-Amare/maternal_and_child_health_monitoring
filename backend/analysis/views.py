from rest_framework.response import Response
from rest_framework.decorators import api_view
from accounts.models import AdminProfile, SurveyorProfile, ClientProfile
from children.models import ChildFollowUp, ChildInformation
from mothers.models import AntenatalFollowUp, PostnatalFollowUp
from children.serializers import ChildFollowUpSerializer
from mothers.serializers import AntenatalFollowUpSerializer, PostnatalFollowUpSerializer
import google.generativeai as genai
import json
import os
from django.contrib.auth.models import User


# Set the Google API Key
os.environ["GOOGLE_API_KEY"] = "AIzaSyCZOZGp5mW3ehbrAesSoiCPHu2AJgLnenU"
genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
model = genai.GenerativeModel("gemini-1.5-pro")


@api_view(["POST"])
def ask_question(request):
    question = request.data.get("question", "")

    if not question:
        return Response({"error": "Question not provided"}, status=400)

    data_entries = ChildFollowUp.objects.all()
    serializer = ChildFollowUpSerializer(data_entries, many=True)
    data_list = serializer.data
    data_json = json.dumps(data_list)

    data_entries_mother_a = AntenatalFollowUp.objects.all()
    serializer_mother_a = AntenatalFollowUpSerializer(data_entries_mother_a, many=True)
    data_list_mother_a = serializer_mother_a.data
    data_json_mother_a = json.dumps(data_list_mother_a)

    data_entries_mother_p = PostnatalFollowUp.objects.all()
    serializer_mother_p = PostnatalFollowUpSerializer(data_entries_mother_p, many=True)
    data_list_mother_p = serializer_mother_p.data
    data_json_mother_p = json.dumps(data_list_mother_p)

    response = model.generate_content(
        f"{data_json} and {data_json_mother_a} and {data_json_mother_p} Given the following data, answer this question: {question},"
    )

    return Response({"answer": response.text})
