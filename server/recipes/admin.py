from django.contrib import admin

from .models import Grade, Step, Recipe


class StepAdminInline(admin.StackedInline):
    model = Step


class GradeAdminInline(admin.StackedInline):
    model = Grade


class InlinesAdmin(admin.ModelAdmin):
    inlines = (StepAdminInline, GradeAdminInline)


admin.site.register(Grade)
admin.site.register(Recipe, InlinesAdmin)
