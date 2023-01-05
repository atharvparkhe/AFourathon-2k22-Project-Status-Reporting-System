from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .validators import validate_name
from .manager import UserManager
from django.db import models
import uuid


class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        abstract = True


class BaseUser(AbstractBaseUser, PermissionsMixin, BaseModel):
    email = models.EmailField(max_length=100, unique=True)
    name = models.CharField(max_length=100, validators=[validate_name])
    phone = models.CharField(max_length=13, null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = UserManager()
    def __str__(self):
        return self.email


class AdminModel(BaseUser):
    pass


class MemberModel(BaseUser):
    pass


class TeamModel(BaseModel):
    team_name = models.CharField(max_length=50)
    start_date = models.DateField(auto_now=False, auto_now_add=False)
    end_date = models.DateField(auto_now=False, auto_now_add=False)
    team_leader = models.ForeignKey(MemberModel, related_name="team_lead", on_delete=models.CASCADE)
    no_of_members = models.PositiveIntegerField(default=1)
    def __str__(self):
        return self.team_name


class TeamMembersModel(BaseModel):
    team = models.ForeignKey(TeamModel, related_name="teammember_team", on_delete=models.CASCADE)
    member = models.ForeignKey(MemberModel, related_name="teammember_member", on_delete=models.CASCADE)
    def __str__(self):
        return self.team.team_name
