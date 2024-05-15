using Serilog;
using TMLM.SalesIllustrator.API;
using TMLM.SalesIllustrator.API.Repositories;
using TMLM.SalesIllustrator.API.Repositories.Abstractions;
using TMLM.SalesIllustrator.API.Services;
using TMLM.SalesIllustrator.API.Services.Abstractions;

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateBootstrapLogger();

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseSerilog((ctx, lc) => lc
        .WriteTo.Console()
        .ReadFrom.Configuration(ctx.Configuration));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddTransient<IUserTokenService, UserTokenService>();
builder.Services.AddTransient<IRhbTreasureBuilderService, RhbTreasureBuilderService>();
builder.Services.AddTransient<IRhbTreasureBuilderRepository, RhbTreasureBuilderRepository>();
builder.Services.AddTransient<IFactFindService, FactFindService>();
builder.Services.AddTransient<IFactFindRepository, FactFindRepository>();

builder.Services.AddTransient<IRT100Service, RT100Service>();
builder.Services.AddTransient<IRT100Repository, RT100Repository>();

builder.Services.AddTransient<IRhbEssentialProtectService, RhbEssentialProtectService>();
builder.Services.AddTransient<IRhbEssentialProtectRepository, RhbEssentialProtectRepository>();

builder.Services.AddTransient<IRhbTreasureSupremeService, RhbTreasureSupremeService>();
builder.Services.AddTransient<IRhbTreasureSupremeRepository, RhbTreasureSupremeRepository>();

builder.Services.AddTransient<IUserSessionService, UserSessionService>();
builder.Services.AddTransient<IUserSessionRepository, UserSessionRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    
}

app.UseSwagger();
app.UseSwaggerUI();

Constant.ConnectionString = app.Configuration.GetConnectionString("Db");
Constant.WebUrl = app.Configuration.GetValue<string>("WebUrl");
Constant.StreamlineApiUrl = app.Configuration.GetValue<string>("StreamlineApiUrl");
Constant.ExtendDuration = 30;
Constant.UrlValidityDuration = 30;


app.UseMiddleware<CustomMiddleware>();

//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
