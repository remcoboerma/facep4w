#
# py4web app, AI-biorex ported 01.12.2020 13:21:37 UTC+3
# https://github.com/ali96343/facep4w
#

import os, json
import bottle

from py4web import action, request, response,  abort, redirect, URL, Field
from py4web.utils.form import Form, FormStyleBulma
from py4web.utils.grid import Grid
from py4web.utils.publisher import Publisher, ALLOW_ALL_POLICY
from pydal.validators import IS_NOT_EMPTY, IS_INT_IN_RANGE, IS_IN_SET, IS_IN_DB
from py4web.core import Template, Reloader
from py4web.utils.dbstore import DBStore

#from yatl.helpers import INPUT, H1, HTML, BODY, A
from .common import db, session, T, cache, authenticated, unauthenticated, auth
from .settings import APP_NAME


 
# ---------------------- Global -----------------------------------------------------

# exposes services necessary to access the db.thing via ajax
publisher = Publisher(db, policy=ALLOW_ALL_POLICY)

#db_sess = DAL('sqlite:memory')
#session =  Session(storage=DBStore(db_sess))

Glb= {'debug': True , 'my_app_name': APP_NAME, 'tte_path': '/static/tte' }

# ---------------------- Utils -------------------------------------------------------

def prn_form_vars(myform, mydb,):

        id_db = None; row_db = None; f0_fld = None; inserted = False

        if Glb['debug'] == True:
            print("app:",Glb['my_app_name'])
            _ = [ print (f'     {k}: {v}') for k,v in myform.vars.items() if k != '_formkey']

        f0_fld = myform.vars.get('f0', None )
        if (not f0_fld is None) and len(f0_fld):
            id_db = mydb.insert(**mydb._filter_fields(myform.vars))
            db.commit()

            if not id_db is None:
                row_db = mydb(id_db )

                if not row_db is None:
                    if Glb['debug'] == True:
                         print(f'     inserted: \"{myform.vars.f0}\" into {mydb.f0}, id = {id_db}' )
                         print(f"     select  : \"{row_db.f0}\" from {mydb.f0}, id = {id_db}" )
                         print ()
                    inserted =True
        else:
            if Glb['debug'] == True:
                print(f"     no entry inserted: (f0_fld is None) or (len(f0_fld) == 0)")
                print()

        return inserted
            
def put_json_messages(mess='mymess'):
    response.headers["Content-Type"] = "application/json"
    return json.dumps( {'messages' : f'{mess}'})
    
# ---------------------- Controllers  ------------------------------------------------

@action('X404', method=["GET", "POST"] )
@action.uses(Template('404.html', delimiters='[%[ ]]',), db, session, T,)

def X404():
    ctrl_info= "ctrl: X404, view: 404.html"
    page_url = "\'" + URL('X404' ) + "\'"
    messages = []

    return locals()

@action('X500', method=["GET", "POST"] )
@action.uses(Template('500.html', delimiters='[%[ ]]',), db, session, T,)

def X500():
    ctrl_info= "ctrl: X500, view: 500.html"
    page_url = "\'" + URL('X500' ) + "\'"
    messages = []

    fX5000= Form(db.dfX5000, dbio=False, formstyle=FormStyleBulma)

    if fX5000.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fX5000, db.dfX5000 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fX5000.form_name ))
    elif fX5000.errors:
        print("fX5000 has errors: %s" % (fX5000.errors))
        return put_json_messages('error: ' + str( fX5000.form_name ))
 

    fX5001= Form(db.dfX5001, dbio=False, formstyle=FormStyleBulma)

    if fX5001.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fX5001, db.dfX5001 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fX5001.form_name ))
    elif fX5001.errors:
        print("fX5001 has errors: %s" % (fX5001.errors))
        return put_json_messages('error: ' + str( fX5001.form_name ))
 

    return locals()

@action('faq', method=["GET", "POST"] )
@action.uses(Template('faq.html', delimiters='[%[ ]]',), db, session, T,)

def faq():
    ctrl_info= "ctrl: faq, view: faq.html"
    page_url = "\'" + URL('faq' ) + "\'"
    messages = []

    ffaq0= Form(db.dffaq0, dbio=False, formstyle=FormStyleBulma)

    if ffaq0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( ffaq0, db.dffaq0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( ffaq0.form_name ))
    elif ffaq0.errors:
        print("ffaq0 has errors: %s" % (ffaq0.errors))
        return put_json_messages('error: ' + str( ffaq0.form_name ))
 

    return locals()

@action('pace', method=["GET", "POST"] )
@action.uses(Template('pace.html', delimiters='[%[ ]]',), db, session, T,)

def pace():
    ctrl_info= "ctrl: pace, view: pace.html"
    page_url = "\'" + URL('pace' ) + "\'"
    messages = []

    fpace0= Form(db.dfpace0, dbio=False, formstyle=FormStyleBulma)

    if fpace0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fpace0, db.dfpace0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fpace0.form_name ))
    elif fpace0.errors:
        print("fpace0 has errors: %s" % (fpace0.errors))
        return put_json_messages('error: ' + str( fpace0.form_name ))
 

    return locals()

@action('data', method=["GET", "POST"] )
@action.uses(Template('data.html', delimiters='[%[ ]]',), db, session, T,)

def data():
    ctrl_info= "ctrl: data, view: data.html"
    page_url = "\'" + URL('data' ) + "\'"
    messages = []

    rows_tdata0= db(db.tdata0).select()
    rows_tdata1= db(db.tdata1).select()
    fdata0= Form(db.dfdata0, dbio=False, formstyle=FormStyleBulma)

    if fdata0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fdata0, db.dfdata0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fdata0.form_name ))
    elif fdata0.errors:
        print("fdata0 has errors: %s" % (fdata0.errors))
        return put_json_messages('error: ' + str( fdata0.form_name ))
 

    return locals()

@action('flot', method=["GET", "POST"] )
@action.uses(Template('flot.html', delimiters='[%[ ]]',), db, session, T,)

def flot():
    ctrl_info= "ctrl: flot, view: flot.html"
    page_url = "\'" + URL('flot' ) + "\'"
    messages = []

    fflot0= Form(db.dfflot0, dbio=False, formstyle=FormStyleBulma)

    if fflot0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fflot0, db.dfflot0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fflot0.form_name ))
    elif fflot0.errors:
        print("fflot0 has errors: %s" % (fflot0.errors))
        return put_json_messages('error: ' + str( fflot0.form_name ))
 

    return locals()

@action('blank', method=["GET", "POST"] )
@action.uses(Template('blank.html', delimiters='[%[ ]]',), db, session, T,)

def blank():
    ctrl_info= "ctrl: blank, view: blank.html"
    page_url = "\'" + URL('blank' ) + "\'"
    messages = []

    fblank0= Form(db.dfblank0, dbio=False, formstyle=FormStyleBulma)

    if fblank0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fblank0, db.dfblank0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fblank0.form_name ))
    elif fblank0.errors:
        print("fblank0 has errors: %s" % (fblank0.errors))
        return put_json_messages('error: ' + str( fblank0.form_name ))
 

    return locals()

@action('login', method=["GET", "POST"] )
@action.uses(Template('login.html', delimiters='[%[ ]]',), db, session, T,)

def login():
    ctrl_info= "ctrl: login, view: login.html"
    page_url = "\'" + URL('login' ) + "\'"
    messages = []

    flogin0= Form(db.dflogin0, dbio=False, formstyle=FormStyleBulma)

    if flogin0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( flogin0, db.dflogin0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( flogin0.form_name ))
    elif flogin0.errors:
        print("flogin0 has errors: %s" % (flogin0.errors))
        return put_json_messages('error: ' + str( flogin0.form_name ))
 

    return locals()

@action('icons', method=["GET", "POST"] )
@action.uses(Template('icons.html', delimiters='[%[ ]]',), db, session, T,)

def icons():
    ctrl_info= "ctrl: icons, view: icons.html"
    page_url = "\'" + URL('icons' ) + "\'"
    messages = []

    ficons0= Form(db.dficons0, dbio=False, formstyle=FormStyleBulma)

    if ficons0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( ficons0, db.dficons0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( ficons0.form_name ))
    elif ficons0.errors:
        print("ficons0 has errors: %s" % (ficons0.errors))
        return put_json_messages('error: ' + str( ficons0.form_name ))
 

    return locals()

@action('uplot', method=["GET", "POST"] )
@action.uses(Template('uplot.html', delimiters='[%[ ]]',), db, session, T,)

def uplot():
    ctrl_info= "ctrl: uplot, view: uplot.html"
    page_url = "\'" + URL('uplot' ) + "\'"
    messages = []

    fuplot0= Form(db.dfuplot0, dbio=False, formstyle=FormStyleBulma)

    if fuplot0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fuplot0, db.dfuplot0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fuplot0.form_name ))
    elif fuplot0.errors:
        print("fuplot0 has errors: %s" % (fuplot0.errors))
        return put_json_messages('error: ' + str( fuplot0.form_name ))
 

    return locals()

@action('boxed', method=["GET", "POST"] )
@action.uses(Template('boxed.html', delimiters='[%[ ]]',), db, session, T,)

def boxed():
    ctrl_info= "ctrl: boxed, view: boxed.html"
    page_url = "\'" + URL('boxed' ) + "\'"
    messages = []

    fboxed0= Form(db.dfboxed0, dbio=False, formstyle=FormStyleBulma)

    if fboxed0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fboxed0, db.dfboxed0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fboxed0.form_name ))
    elif fboxed0.errors:
        print("fboxed0 has errors: %s" % (fboxed0.errors))
        return put_json_messages('error: ' + str( fboxed0.form_name ))
 

    return locals()

@action('index', method=["GET", "POST"] )
@action.uses(Template('index.html', delimiters='[%[ ]]',), db, session, T,)

def index():
    ctrl_info= "ctrl: index, view: index.html"
    page_url = "\'" + URL('index' ) + "\'"
    messages = []

    findex0= Form(db.dfindex0, dbio=False, formstyle=FormStyleBulma)

    if findex0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( findex0, db.dfindex0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( findex0.form_name ))
    elif findex0.errors:
        print("findex0 has errors: %s" % (findex0.errors))
        return put_json_messages('error: ' + str( findex0.form_name ))
 

    findex1= Form(db.dfindex1, dbio=False, formstyle=FormStyleBulma)

    if findex1.accepted:
        mess1 = 'accepted: ' if prn_form_vars( findex1, db.dfindex1 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( findex1.form_name ))
    elif findex1.errors:
        print("findex1 has errors: %s" % (findex1.errors))
        return put_json_messages('error: ' + str( findex1.form_name ))
 

    return locals()

@action('navbar', method=["GET", "POST"] )
@action.uses(Template('navbar.html', delimiters='[%[ ]]',), db, session, T,)

def navbar():
    ctrl_info= "ctrl: navbar, view: navbar.html"
    page_url = "\'" + URL('navbar' ) + "\'"
    messages = []

    fnavbar0= Form(db.dfnavbar0, dbio=False, formstyle=FormStyleBulma)

    if fnavbar0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fnavbar0, db.dfnavbar0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fnavbar0.form_name ))
    elif fnavbar0.errors:
        print("fnavbar0 has errors: %s" % (fnavbar0.errors))
        return put_json_messages('error: ' + str( fnavbar0.form_name ))
 

    fnavbar1= Form(db.dfnavbar1, dbio=False, formstyle=FormStyleBulma)

    if fnavbar1.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fnavbar1, db.dfnavbar1 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fnavbar1.form_name ))
    elif fnavbar1.errors:
        print("fnavbar1 has errors: %s" % (fnavbar1.errors))
        return put_json_messages('error: ' + str( fnavbar1.form_name ))
 

    fnavbar2= Form(db.dfnavbar2, dbio=False, formstyle=FormStyleBulma)

    if fnavbar2.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fnavbar2, db.dfnavbar2 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fnavbar2.form_name ))
    elif fnavbar2.errors:
        print("fnavbar2 has errors: %s" % (fnavbar2.errors))
        return put_json_messages('error: ' + str( fnavbar2.form_name ))
 

    fnavbar3= Form(db.dfnavbar3, dbio=False, formstyle=FormStyleBulma)

    if fnavbar3.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fnavbar3, db.dfnavbar3 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fnavbar3.form_name ))
    elif fnavbar3.errors:
        print("fnavbar3 has errors: %s" % (fnavbar3.errors))
        return put_json_messages('error: ' + str( fnavbar3.form_name ))
 

    fnavbar4= Form(db.dfnavbar4, dbio=False, formstyle=FormStyleBulma)

    if fnavbar4.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fnavbar4, db.dfnavbar4 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fnavbar4.form_name ))
    elif fnavbar4.errors:
        print("fnavbar4 has errors: %s" % (fnavbar4.errors))
        return put_json_messages('error: ' + str( fnavbar4.form_name ))
 

    fnavbar5= Form(db.dfnavbar5, dbio=False, formstyle=FormStyleBulma)

    if fnavbar5.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fnavbar5, db.dfnavbar5 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fnavbar5.form_name ))
    elif fnavbar5.errors:
        print("fnavbar5 has errors: %s" % (fnavbar5.errors))
        return put_json_messages('error: ' + str( fnavbar5.form_name ))
 

    fnavbar6= Form(db.dfnavbar6, dbio=False, formstyle=FormStyleBulma)

    if fnavbar6.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fnavbar6, db.dfnavbar6 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fnavbar6.form_name ))
    elif fnavbar6.errors:
        print("fnavbar6 has errors: %s" % (fnavbar6.errors))
        return put_json_messages('error: ' + str( fnavbar6.form_name ))
 

    return locals()

@action('kanban', method=["GET", "POST"] )
@action.uses(Template('kanban.html', delimiters='[%[ ]]',), db, session, T,)

def kanban():
    ctrl_info= "ctrl: kanban, view: kanban.html"
    page_url = "\'" + URL('kanban' ) + "\'"
    messages = []

    fkanban0= Form(db.dfkanban0, dbio=False, formstyle=FormStyleBulma)

    if fkanban0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fkanban0, db.dfkanban0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fkanban0.form_name ))
    elif fkanban0.errors:
        print("fkanban0 has errors: %s" % (fkanban0.errors))
        return put_json_messages('error: ' + str( fkanban0.form_name ))
 

    return locals()

@action('jsgrid', method=["GET", "POST"] )
@action.uses(Template('jsgrid.html', delimiters='[%[ ]]',), db, session, T,)

def jsgrid():
    ctrl_info= "ctrl: jsgrid, view: jsgrid.html"
    page_url = "\'" + URL('jsgrid' ) + "\'"
    messages = []

    fjsgrid0= Form(db.dfjsgrid0, dbio=False, formstyle=FormStyleBulma)

    if fjsgrid0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fjsgrid0, db.dfjsgrid0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fjsgrid0.form_name ))
    elif fjsgrid0.errors:
        print("fjsgrid0 has errors: %s" % (fjsgrid0.errors))
        return put_json_messages('error: ' + str( fjsgrid0.form_name ))
 

    return locals()

@action('simple', method=["GET", "POST"] )
@action.uses(Template('simple.html', delimiters='[%[ ]]',), db, session, T,)

def simple():
    ctrl_info= "ctrl: simple, view: simple.html"
    page_url = "\'" + URL('simple' ) + "\'"
    messages = []

    fsimple0= Form(db.dfsimple0, dbio=False, formstyle=FormStyleBulma)

    if fsimple0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fsimple0, db.dfsimple0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fsimple0.form_name ))
    elif fsimple0.errors:
        print("fsimple0 has errors: %s" % (fsimple0.errors))
        return put_json_messages('error: ' + str( fsimple0.form_name ))
 

    return locals()

@action('modals', method=["GET", "POST"] )
@action.uses(Template('modals.html', delimiters='[%[ ]]',), db, session, T,)

def modals():
    ctrl_info= "ctrl: modals, view: modals.html"
    page_url = "\'" + URL('modals' ) + "\'"
    messages = []

    fmodals0= Form(db.dfmodals0, dbio=False, formstyle=FormStyleBulma)

    if fmodals0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fmodals0, db.dfmodals0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fmodals0.form_name ))
    elif fmodals0.errors:
        print("fmodals0 has errors: %s" % (fmodals0.errors))
        return put_json_messages('error: ' + str( fmodals0.form_name ))
 

    return locals()

@action('inline', method=["GET", "POST"] )
@action.uses(Template('inline.html', delimiters='[%[ ]]',), db, session, T,)

def inline():
    ctrl_info= "ctrl: inline, view: inline.html"
    page_url = "\'" + URL('inline' ) + "\'"
    messages = []

    finline0= Form(db.dfinline0, dbio=False, formstyle=FormStyleBulma)

    if finline0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( finline0, db.dfinline0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( finline0.form_name ))
    elif finline0.errors:
        print("finline0 has errors: %s" % (finline0.errors))
        return put_json_messages('error: ' + str( finline0.form_name ))
 

    return locals()

@action('index3', method=["GET", "POST"] )
@action.uses(Template('index3.html', delimiters='[%[ ]]',), db, session, T,)

def index3():
    ctrl_info= "ctrl: index3, view: index3.html"
    page_url = "\'" + URL('index3' ) + "\'"
    messages = []

    rows_tindex30= db(db.tindex30).select()
    findex30= Form(db.dfindex30, dbio=False, formstyle=FormStyleBulma)

    if findex30.accepted:
        mess1 = 'accepted: ' if prn_form_vars( findex30, db.dfindex30 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( findex30.form_name ))
    elif findex30.errors:
        print("findex30 has errors: %s" % (findex30.errors))
        return put_json_messages('error: ' + str( findex30.form_name ))
 

    return locals()

@action('index2', method=["GET", "POST"] )
@action.uses(Template('index2.html', delimiters='[%[ ]]',), db, session, T,)

def index2():
    ctrl_info= "ctrl: index2, view: index2.html"
    page_url = "\'" + URL('index2' ) + "\'"
    messages = []

    rows_tindex20= db(db.tindex20).select()
    findex20= Form(db.dfindex20, dbio=False, formstyle=FormStyleBulma)

    if findex20.accepted:
        mess1 = 'accepted: ' if prn_form_vars( findex20, db.dfindex20 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( findex20.form_name ))
    elif findex20.errors:
        print("findex20 has errors: %s" % (findex20.errors))
        return put_json_messages('error: ' + str( findex20.form_name ))
 

    findex21= Form(db.dfindex21, dbio=False, formstyle=FormStyleBulma)

    if findex21.accepted:
        mess1 = 'accepted: ' if prn_form_vars( findex21, db.dfindex21 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( findex21.form_name ))
    elif findex21.errors:
        print("findex21 has errors: %s" % (findex21.errors))
        return put_json_messages('error: ' + str( findex21.form_name ))
 

    return locals()

@action('iframe', method=["GET", "POST"] )
@action.uses(Template('iframe.html', delimiters='[%[ ]]',), db, session, T,)

def iframe():
    ctrl_info= "ctrl: iframe, view: iframe.html"
    page_url = "\'" + URL('iframe' ) + "\'"
    messages = []

    fiframe0= Form(db.dfiframe0, dbio=False, formstyle=FormStyleBulma)

    if fiframe0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fiframe0, db.dfiframe0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fiframe0.form_name ))
    elif fiframe0.errors:
        print("fiframe0 has errors: %s" % (fiframe0.errors))
        return put_json_messages('error: ' + str( fiframe0.form_name ))
 

    return locals()

@action('profile', method=["GET", "POST"] )
@action.uses(Template('profile.html', delimiters='[%[ ]]',), db, session, T,)

def profile():
    ctrl_info= "ctrl: profile, view: profile.html"
    page_url = "\'" + URL('profile' ) + "\'"
    messages = []

    fprofile0= Form(db.dfprofile0, dbio=False, formstyle=FormStyleBulma)

    if fprofile0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fprofile0, db.dfprofile0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fprofile0.form_name ))
    elif fprofile0.errors:
        print("fprofile0 has errors: %s" % (fprofile0.errors))
        return put_json_messages('error: ' + str( fprofile0.form_name ))
 

    fprofile1= Form(db.dfprofile1, dbio=False, formstyle=FormStyleBulma)

    if fprofile1.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fprofile1, db.dfprofile1 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fprofile1.form_name ))
    elif fprofile1.errors:
        print("fprofile1 has errors: %s" % (fprofile1.errors))
        return put_json_messages('error: ' + str( fprofile1.form_name ))
 

    fprofile2= Form(db.dfprofile2, dbio=False, formstyle=FormStyleBulma)

    if fprofile2.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fprofile2, db.dfprofile2 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fprofile2.form_name ))
    elif fprofile2.errors:
        print("fprofile2 has errors: %s" % (fprofile2.errors))
        return put_json_messages('error: ' + str( fprofile2.form_name ))
 

    return locals()

@action('invoice', method=["GET", "POST"] )
@action.uses(Template('invoice.html', delimiters='[%[ ]]',), db, session, T,)

def invoice():
    ctrl_info= "ctrl: invoice, view: invoice.html"
    page_url = "\'" + URL('invoice' ) + "\'"
    messages = []

    rows_tinvoice0= db(db.tinvoice0).select()
    rows_tinvoice1= db(db.tinvoice1).select()
    finvoice0= Form(db.dfinvoice0, dbio=False, formstyle=FormStyleBulma)

    if finvoice0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( finvoice0, db.dfinvoice0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( finvoice0.form_name ))
    elif finvoice0.errors:
        print("finvoice0 has errors: %s" % (finvoice0.errors))
        return put_json_messages('error: ' + str( finvoice0.form_name ))
 

    return locals()

@action('mailbox', method=["GET", "POST"] )
@action.uses(Template('mailbox.html', delimiters='[%[ ]]',), db, session, T,)

def mailbox():
    ctrl_info= "ctrl: mailbox, view: mailbox.html"
    page_url = "\'" + URL('mailbox' ) + "\'"
    messages = []

    rows_tmailbox0= db(db.tmailbox0).select()
    fmailbox0= Form(db.dfmailbox0, dbio=False, formstyle=FormStyleBulma)

    if fmailbox0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fmailbox0, db.dfmailbox0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fmailbox0.form_name ))
    elif fmailbox0.errors:
        print("fmailbox0 has errors: %s" % (fmailbox0.errors))
        return put_json_messages('error: ' + str( fmailbox0.form_name ))
 

    return locals()

@action('compose', method=["GET", "POST"] )
@action.uses(Template('compose.html', delimiters='[%[ ]]',), db, session, T,)

def compose():
    ctrl_info= "ctrl: compose, view: compose.html"
    page_url = "\'" + URL('compose' ) + "\'"
    messages = []

    fcompose0= Form(db.dfcompose0, dbio=False, formstyle=FormStyleBulma)

    if fcompose0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fcompose0, db.dfcompose0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fcompose0.form_name ))
    elif fcompose0.errors:
        print("fcompose0 has errors: %s" % (fcompose0.errors))
        return put_json_messages('error: ' + str( fcompose0.form_name ))
 

    return locals()

@action('gallery', method=["GET", "POST"] )
@action.uses(Template('gallery.html', delimiters='[%[ ]]',), db, session, T,)

def gallery():
    ctrl_info= "ctrl: gallery, view: gallery.html"
    page_url = "\'" + URL('gallery' ) + "\'"
    messages = []

    fgallery0= Form(db.dfgallery0, dbio=False, formstyle=FormStyleBulma)

    if fgallery0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fgallery0, db.dfgallery0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fgallery0.form_name ))
    elif fgallery0.errors:
        print("fgallery0 has errors: %s" % (fgallery0.errors))
        return put_json_messages('error: ' + str( fgallery0.form_name ))
 

    return locals()

@action('editors', method=["GET", "POST"] )
@action.uses(Template('editors.html', delimiters='[%[ ]]',), db, session, T,)

def editors():
    ctrl_info= "ctrl: editors, view: editors.html"
    page_url = "\'" + URL('editors' ) + "\'"
    messages = []

    feditors0= Form(db.dfeditors0, dbio=False, formstyle=FormStyleBulma)

    if feditors0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( feditors0, db.dfeditors0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( feditors0.form_name ))
    elif feditors0.errors:
        print("feditors0 has errors: %s" % (feditors0.errors))
        return put_json_messages('error: ' + str( feditors0.form_name ))
 

    return locals()

@action('ribbons', method=["GET", "POST"] )
@action.uses(Template('ribbons.html', delimiters='[%[ ]]',), db, session, T,)

def ribbons():
    ctrl_info= "ctrl: ribbons, view: ribbons.html"
    page_url = "\'" + URL('ribbons' ) + "\'"
    messages = []

    fribbons0= Form(db.dfribbons0, dbio=False, formstyle=FormStyleBulma)

    if fribbons0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fribbons0, db.dfribbons0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fribbons0.form_name ))
    elif fribbons0.errors:
        print("fribbons0 has errors: %s" % (fribbons0.errors))
        return put_json_messages('error: ' + str( fribbons0.form_name ))
 

    return locals()

@action('sliders', method=["GET", "POST"] )
@action.uses(Template('sliders.html', delimiters='[%[ ]]',), db, session, T,)

def sliders():
    ctrl_info= "ctrl: sliders, view: sliders.html"
    page_url = "\'" + URL('sliders' ) + "\'"
    messages = []

    fsliders0= Form(db.dfsliders0, dbio=False, formstyle=FormStyleBulma)

    if fsliders0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fsliders0, db.dfsliders0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fsliders0.form_name ))
    elif fsliders0.errors:
        print("fsliders0 has errors: %s" % (fsliders0.errors))
        return put_json_messages('error: ' + str( fsliders0.form_name ))
 

    return locals()

@action('buttons', method=["GET", "POST"] )
@action.uses(Template('buttons.html', delimiters='[%[ ]]',), db, session, T,)

def buttons():
    ctrl_info= "ctrl: buttons, view: buttons.html"
    page_url = "\'" + URL('buttons' ) + "\'"
    messages = []

    rows_tbuttons0= db(db.tbuttons0).select()
    rows_tbuttons1= db(db.tbuttons1).select()
    rows_tbuttons2= db(db.tbuttons2).select()
    rows_tbuttons3= db(db.tbuttons3).select()
    rows_tbuttons4= db(db.tbuttons4).select()
    fbuttons0= Form(db.dfbuttons0, dbio=False, formstyle=FormStyleBulma)

    if fbuttons0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fbuttons0, db.dfbuttons0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fbuttons0.form_name ))
    elif fbuttons0.errors:
        print("fbuttons0 has errors: %s" % (fbuttons0.errors))
        return put_json_messages('error: ' + str( fbuttons0.form_name ))
 

    return locals()

@action('general', method=["GET", "POST"] )
@action.uses(Template('general.html', delimiters='[%[ ]]',), db, session, T,)

def general():
    ctrl_info= "ctrl: general, view: general.html"
    page_url = "\'" + URL('general' ) + "\'"
    messages = []

    fgeneral0= Form(db.dfgeneral0, dbio=False, formstyle=FormStyleBulma)

    if fgeneral0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fgeneral0, db.dfgeneral0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fgeneral0.form_name ))
    elif fgeneral0.errors:
        print("fgeneral0 has errors: %s" % (fgeneral0.errors))
        return put_json_messages('error: ' + str( fgeneral0.form_name ))
 

    return locals()

@action('chartjs', method=["GET", "POST"] )
@action.uses(Template('chartjs.html', delimiters='[%[ ]]',), db, session, T,)

def chartjs():
    ctrl_info= "ctrl: chartjs, view: chartjs.html"
    page_url = "\'" + URL('chartjs' ) + "\'"
    messages = []

    fchartjs0= Form(db.dfchartjs0, dbio=False, formstyle=FormStyleBulma)

    if fchartjs0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fchartjs0, db.dfchartjs0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fchartjs0.form_name ))
    elif fchartjs0.errors:
        print("fchartjs0 has errors: %s" % (fchartjs0.errors))
        return put_json_messages('error: ' + str( fchartjs0.form_name ))
 

    return locals()

@action('topXnav', method=["GET", "POST"] )
@action.uses(Template('top-nav.html', delimiters='[%[ ]]',), db, session, T,)

def topXnav():
    ctrl_info= "ctrl: topXnav, view: top-nav.html"
    page_url = "\'" + URL('topXnav' ) + "\'"
    messages = []

    ftopXnav0= Form(db.dftopXnav0, dbio=False, formstyle=FormStyleBulma)

    if ftopXnav0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( ftopXnav0, db.dftopXnav0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( ftopXnav0.form_name ))
    elif ftopXnav0.errors:
        print("ftopXnav0 has errors: %s" % (ftopXnav0.errors))
        return put_json_messages('error: ' + str( ftopXnav0.form_name ))
 

    return locals()

@action('widgets', method=["GET", "POST"] )
@action.uses(Template('widgets.html', delimiters='[%[ ]]',), db, session, T,)

def widgets():
    ctrl_info= "ctrl: widgets, view: widgets.html"
    page_url = "\'" + URL('widgets' ) + "\'"
    messages = []

    fwidgets0= Form(db.dfwidgets0, dbio=False, formstyle=FormStyleBulma)

    if fwidgets0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fwidgets0, db.dfwidgets0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fwidgets0.form_name ))
    elif fwidgets0.errors:
        print("fwidgets0 has errors: %s" % (fwidgets0.errors))
        return put_json_messages('error: ' + str( fwidgets0.form_name ))
 

    fwidgets1= Form(db.dfwidgets1, dbio=False, formstyle=FormStyleBulma)

    if fwidgets1.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fwidgets1, db.dfwidgets1 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fwidgets1.form_name ))
    elif fwidgets1.errors:
        print("fwidgets1 has errors: %s" % (fwidgets1.errors))
        return put_json_messages('error: ' + str( fwidgets1.form_name ))
 

    fwidgets2= Form(db.dfwidgets2, dbio=False, formstyle=FormStyleBulma)

    if fwidgets2.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fwidgets2, db.dfwidgets2 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fwidgets2.form_name ))
    elif fwidgets2.errors:
        print("fwidgets2 has errors: %s" % (fwidgets2.errors))
        return put_json_messages('error: ' + str( fwidgets2.form_name ))
 

    fwidgets3= Form(db.dfwidgets3, dbio=False, formstyle=FormStyleBulma)

    if fwidgets3.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fwidgets3, db.dfwidgets3 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fwidgets3.form_name ))
    elif fwidgets3.errors:
        print("fwidgets3 has errors: %s" % (fwidgets3.errors))
        return put_json_messages('error: ' + str( fwidgets3.form_name ))
 

    fwidgets4= Form(db.dfwidgets4, dbio=False, formstyle=FormStyleBulma)

    if fwidgets4.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fwidgets4, db.dfwidgets4 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fwidgets4.form_name ))
    elif fwidgets4.errors:
        print("fwidgets4 has errors: %s" % (fwidgets4.errors))
        return put_json_messages('error: ' + str( fwidgets4.form_name ))
 

    fwidgets5= Form(db.dfwidgets5, dbio=False, formstyle=FormStyleBulma)

    if fwidgets5.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fwidgets5, db.dfwidgets5 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fwidgets5.form_name ))
    elif fwidgets5.errors:
        print("fwidgets5 has errors: %s" % (fwidgets5.errors))
        return put_json_messages('error: ' + str( fwidgets5.form_name ))
 

    fwidgets6= Form(db.dfwidgets6, dbio=False, formstyle=FormStyleBulma)

    if fwidgets6.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fwidgets6, db.dfwidgets6 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fwidgets6.form_name ))
    elif fwidgets6.errors:
        print("fwidgets6 has errors: %s" % (fwidgets6.errors))
        return put_json_messages('error: ' + str( fwidgets6.form_name ))
 

    fwidgets7= Form(db.dfwidgets7, dbio=False, formstyle=FormStyleBulma)

    if fwidgets7.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fwidgets7, db.dfwidgets7 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fwidgets7.form_name ))
    elif fwidgets7.errors:
        print("fwidgets7 has errors: %s" % (fwidgets7.errors))
        return put_json_messages('error: ' + str( fwidgets7.form_name ))
 

    fwidgets8= Form(db.dfwidgets8, dbio=False, formstyle=FormStyleBulma)

    if fwidgets8.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fwidgets8, db.dfwidgets8 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fwidgets8.form_name ))
    elif fwidgets8.errors:
        print("fwidgets8 has errors: %s" % (fwidgets8.errors))
        return put_json_messages('error: ' + str( fwidgets8.form_name ))
 

    fwidgets9= Form(db.dfwidgets9, dbio=False, formstyle=FormStyleBulma)

    if fwidgets9.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fwidgets9, db.dfwidgets9 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fwidgets9.form_name ))
    elif fwidgets9.errors:
        print("fwidgets9 has errors: %s" % (fwidgets9.errors))
        return put_json_messages('error: ' + str( fwidgets9.form_name ))
 

    fwidgets10= Form(db.dfwidgets10, dbio=False, formstyle=FormStyleBulma)

    if fwidgets10.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fwidgets10, db.dfwidgets10 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fwidgets10.form_name ))
    elif fwidgets10.errors:
        print("fwidgets10 has errors: %s" % (fwidgets10.errors))
        return put_json_messages('error: ' + str( fwidgets10.form_name ))
 

    return locals()

@action('starter', method=["GET", "POST"] )
@action.uses(Template('starter.html', delimiters='[%[ ]]',), db, session, T,)

def starter():
    ctrl_info= "ctrl: starter, view: starter.html"
    page_url = "\'" + URL('starter' ) + "\'"
    messages = []

    fstarter0= Form(db.dfstarter0, dbio=False, formstyle=FormStyleBulma)

    if fstarter0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fstarter0, db.dfstarter0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fstarter0.form_name ))
    elif fstarter0.errors:
        print("fstarter0 has errors: %s" % (fstarter0.errors))
        return put_json_messages('error: ' + str( fstarter0.form_name ))
 

    return locals()

@action('enhanced', method=["GET", "POST"] )
@action.uses(Template('enhanced.html', delimiters='[%[ ]]',), db, session, T,)

def enhanced():
    ctrl_info= "ctrl: enhanced, view: enhanced.html"
    page_url = "\'" + URL('enhanced' ) + "\'"
    messages = []

    fenhanced0= Form(db.dfenhanced0, dbio=False, formstyle=FormStyleBulma)

    if fenhanced0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fenhanced0, db.dfenhanced0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fenhanced0.form_name ))
    elif fenhanced0.errors:
        print("fenhanced0 has errors: %s" % (fenhanced0.errors))
        return put_json_messages('error: ' + str( fenhanced0.form_name ))
 

    fenhanced1= Form(db.dfenhanced1, dbio=False, formstyle=FormStyleBulma)

    if fenhanced1.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fenhanced1, db.dfenhanced1 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fenhanced1.form_name ))
    elif fenhanced1.errors:
        print("fenhanced1 has errors: %s" % (fenhanced1.errors))
        return put_json_messages('error: ' + str( fenhanced1.form_name ))
 

    return locals()

@action('loginXv2', method=["GET", "POST"] )
@action.uses(Template('login-v2.html', delimiters='[%[ ]]',), db, session, T,)

def loginXv2():
    ctrl_info= "ctrl: loginXv2, view: login-v2.html"
    page_url = "\'" + URL('loginXv2' ) + "\'"
    messages = []

    floginXv20= Form(db.dfloginXv20, dbio=False, formstyle=FormStyleBulma)

    if floginXv20.accepted:
        mess1 = 'accepted: ' if prn_form_vars( floginXv20, db.dfloginXv20 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( floginXv20.form_name ))
    elif floginXv20.errors:
        print("floginXv20 has errors: %s" % (floginXv20.errors))
        return put_json_messages('error: ' + str( floginXv20.form_name ))
 

    return locals()

@action('register', method=["GET", "POST"] )
@action.uses(Template('register.html', delimiters='[%[ ]]',), db, session, T,)

def register():
    ctrl_info= "ctrl: register, view: register.html"
    page_url = "\'" + URL('register' ) + "\'"
    messages = []

    fregister0= Form(db.dfregister0, dbio=False, formstyle=FormStyleBulma)

    if fregister0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fregister0, db.dfregister0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fregister0.form_name ))
    elif fregister0.errors:
        print("fregister0 has errors: %s" % (fregister0.errors))
        return put_json_messages('error: ' + str( fregister0.form_name ))
 

    return locals()

@action('contacts', method=["GET", "POST"] )
@action.uses(Template('contacts.html', delimiters='[%[ ]]',), db, session, T,)

def contacts():
    ctrl_info= "ctrl: contacts, view: contacts.html"
    page_url = "\'" + URL('contacts' ) + "\'"
    messages = []

    fcontacts0= Form(db.dfcontacts0, dbio=False, formstyle=FormStyleBulma)

    if fcontacts0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fcontacts0, db.dfcontacts0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fcontacts0.form_name ))
    elif fcontacts0.errors:
        print("fcontacts0 has errors: %s" % (fcontacts0.errors))
        return put_json_messages('error: ' + str( fcontacts0.form_name ))
 

    return locals()

@action('projects', method=["GET", "POST"] )
@action.uses(Template('projects.html', delimiters='[%[ ]]',), db, session, T,)

def projects():
    ctrl_info= "ctrl: projects, view: projects.html"
    page_url = "\'" + URL('projects' ) + "\'"
    messages = []

    rows_tprojects0= db(db.tprojects0).select()
    fprojects0= Form(db.dfprojects0, dbio=False, formstyle=FormStyleBulma)

    if fprojects0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fprojects0, db.dfprojects0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fprojects0.form_name ))
    elif fprojects0.errors:
        print("fprojects0 has errors: %s" % (fprojects0.errors))
        return put_json_messages('error: ' + str( fprojects0.form_name ))
 

    return locals()

@action('calendar', method=["GET", "POST"] )
@action.uses(Template('calendar.html', delimiters='[%[ ]]',), db, session, T,)

def calendar():
    ctrl_info= "ctrl: calendar, view: calendar.html"
    page_url = "\'" + URL('calendar' ) + "\'"
    messages = []

    fcalendar0= Form(db.dfcalendar0, dbio=False, formstyle=FormStyleBulma)

    if fcalendar0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fcalendar0, db.dfcalendar0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fcalendar0.form_name ))
    elif fcalendar0.errors:
        print("fcalendar0 has errors: %s" % (fcalendar0.errors))
        return put_json_messages('error: ' + str( fcalendar0.form_name ))
 

    return locals()

@action('timeline', method=["GET", "POST"] )
@action.uses(Template('timeline.html', delimiters='[%[ ]]',), db, session, T,)

def timeline():
    ctrl_info= "ctrl: timeline, view: timeline.html"
    page_url = "\'" + URL('timeline' ) + "\'"
    messages = []

    ftimeline0= Form(db.dftimeline0, dbio=False, formstyle=FormStyleBulma)

    if ftimeline0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( ftimeline0, db.dftimeline0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( ftimeline0.form_name ))
    elif ftimeline0.errors:
        print("ftimeline0 has errors: %s" % (ftimeline0.errors))
        return put_json_messages('error: ' + str( ftimeline0.form_name ))
 

    return locals()

@action('advanced', method=["GET", "POST"] )
@action.uses(Template('advanced.html', delimiters='[%[ ]]',), db, session, T,)

def advanced():
    ctrl_info= "ctrl: advanced, view: advanced.html"
    page_url = "\'" + URL('advanced' ) + "\'"
    messages = []

    fadvanced0= Form(db.dfadvanced0, dbio=False, formstyle=FormStyleBulma)

    if fadvanced0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fadvanced0, db.dfadvanced0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fadvanced0.form_name ))
    elif fadvanced0.errors:
        print("fadvanced0 has errors: %s" % (fadvanced0.errors))
        return put_json_messages('error: ' + str( fadvanced0.form_name ))
 

    return locals()

@action('readXmail', method=["GET", "POST"] )
@action.uses(Template('read-mail.html', delimiters='[%[ ]]',), db, session, T,)

def readXmail():
    ctrl_info= "ctrl: readXmail, view: read-mail.html"
    page_url = "\'" + URL('readXmail' ) + "\'"
    messages = []

    freadXmail0= Form(db.dfreadXmail0, dbio=False, formstyle=FormStyleBulma)

    if freadXmail0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( freadXmail0, db.dfreadXmail0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( freadXmail0.form_name ))
    elif freadXmail0.errors:
        print("freadXmail0 has errors: %s" % (freadXmail0.errors))
        return put_json_messages('error: ' + str( freadXmail0.form_name ))
 

    return locals()

@action('lockscreen', method=["GET", "POST"] )
@action.uses(Template('lockscreen.html', delimiters='[%[ ]]',), db, session, T,)

def lockscreen():
    ctrl_info= "ctrl: lockscreen, view: lockscreen.html"
    page_url = "\'" + URL('lockscreen' ) + "\'"
    messages = []

    flockscreen0= Form(db.dflockscreen0, dbio=False, formstyle=FormStyleBulma)

    if flockscreen0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( flockscreen0, db.dflockscreen0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( flockscreen0.form_name ))
    elif flockscreen0.errors:
        print("flockscreen0 has errors: %s" % (flockscreen0.errors))
        return put_json_messages('error: ' + str( flockscreen0.form_name ))
 

    return locals()

@action('contactXus', method=["GET", "POST"] )
@action.uses(Template('contact-us.html', delimiters='[%[ ]]',), db, session, T,)

def contactXus():
    ctrl_info= "ctrl: contactXus, view: contact-us.html"
    page_url = "\'" + URL('contactXus' ) + "\'"
    messages = []

    fcontactXus0= Form(db.dfcontactXus0, dbio=False, formstyle=FormStyleBulma)

    if fcontactXus0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fcontactXus0, db.dfcontactXus0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fcontactXus0.form_name ))
    elif fcontactXus0.errors:
        print("fcontactXus0 has errors: %s" % (fcontactXus0.errors))
        return put_json_messages('error: ' + str( fcontactXus0.form_name ))
 

    return locals()

@action('eXcommerce', method=["GET", "POST"] )
@action.uses(Template('e-commerce.html', delimiters='[%[ ]]',), db, session, T,)

def eXcommerce():
    ctrl_info= "ctrl: eXcommerce, view: e-commerce.html"
    page_url = "\'" + URL('eXcommerce' ) + "\'"
    messages = []

    feXcommerce0= Form(db.dfeXcommerce0, dbio=False, formstyle=FormStyleBulma)

    if feXcommerce0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( feXcommerce0, db.dfeXcommerce0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( feXcommerce0.form_name ))
    elif feXcommerce0.errors:
        print("feXcommerce0 has errors: %s" % (feXcommerce0.errors))
        return put_json_messages('error: ' + str( feXcommerce0.form_name ))
 

    return locals()

@action('validation', method=["GET", "POST"] )
@action.uses(Template('validation.html', delimiters='[%[ ]]',), db, session, T,)

def validation():
    ctrl_info= "ctrl: validation, view: validation.html"
    page_url = "\'" + URL('validation' ) + "\'"
    messages = []

    fvalidation0= Form(db.dfvalidation0, dbio=False, formstyle=FormStyleBulma)

    if fvalidation0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fvalidation0, db.dfvalidation0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fvalidation0.form_name ))
    elif fvalidation0.errors:
        print("fvalidation0 has errors: %s" % (fvalidation0.errors))
        return put_json_messages('error: ' + str( fvalidation0.form_name ))
 

    fvalidation1= Form(db.dfvalidation1, dbio=False, formstyle=FormStyleBulma)

    if fvalidation1.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fvalidation1, db.dfvalidation1 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fvalidation1.form_name ))
    elif fvalidation1.errors:
        print("fvalidation1 has errors: %s" % (fvalidation1.errors))
        return put_json_messages('error: ' + str( fvalidation1.form_name ))
 

    return locals()

@action('registerXv2', method=["GET", "POST"] )
@action.uses(Template('register-v2.html', delimiters='[%[ ]]',), db, session, T,)

def registerXv2():
    ctrl_info= "ctrl: registerXv2, view: register-v2.html"
    page_url = "\'" + URL('registerXv2' ) + "\'"
    messages = []

    fregisterXv20= Form(db.dfregisterXv20, dbio=False, formstyle=FormStyleBulma)

    if fregisterXv20.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fregisterXv20, db.dfregisterXv20 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fregisterXv20.form_name ))
    elif fregisterXv20.errors:
        print("fregisterXv20 has errors: %s" % (fregisterXv20.errors))
        return put_json_messages('error: ' + str( fregisterXv20.form_name ))
 

    return locals()

@action('projectXadd', method=["GET", "POST"] )
@action.uses(Template('project-add.html', delimiters='[%[ ]]',), db, session, T,)

def projectXadd():
    ctrl_info= "ctrl: projectXadd, view: project-add.html"
    page_url = "\'" + URL('projectXadd' ) + "\'"
    messages = []

    fprojectXadd0= Form(db.dfprojectXadd0, dbio=False, formstyle=FormStyleBulma)

    if fprojectXadd0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fprojectXadd0, db.dfprojectXadd0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fprojectXadd0.form_name ))
    elif fprojectXadd0.errors:
        print("fprojectXadd0 has errors: %s" % (fprojectXadd0.errors))
        return put_json_messages('error: ' + str( fprojectXadd0.form_name ))
 

    return locals()

@action('projectXedit', method=["GET", "POST"] )
@action.uses(Template('project-edit.html', delimiters='[%[ ]]',), db, session, T,)

def projectXedit():
    ctrl_info= "ctrl: projectXedit, view: project-edit.html"
    page_url = "\'" + URL('projectXedit' ) + "\'"
    messages = []

    rows_tprojectXedit0= db(db.tprojectXedit0).select()
    fprojectXedit0= Form(db.dfprojectXedit0, dbio=False, formstyle=FormStyleBulma)

    if fprojectXedit0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fprojectXedit0, db.dfprojectXedit0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fprojectXedit0.form_name ))
    elif fprojectXedit0.errors:
        print("fprojectXedit0 has errors: %s" % (fprojectXedit0.errors))
        return put_json_messages('error: ' + str( fprojectXedit0.form_name ))
 

    return locals()

@action('fixedXfooter', method=["GET", "POST"] )
@action.uses(Template('fixed-footer.html', delimiters='[%[ ]]',), db, session, T,)

def fixedXfooter():
    ctrl_info= "ctrl: fixedXfooter, view: fixed-footer.html"
    page_url = "\'" + URL('fixedXfooter' ) + "\'"
    messages = []

    ffixedXfooter0= Form(db.dffixedXfooter0, dbio=False, formstyle=FormStyleBulma)

    if ffixedXfooter0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( ffixedXfooter0, db.dffixedXfooter0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( ffixedXfooter0.form_name ))
    elif ffixedXfooter0.errors:
        print("ffixedXfooter0 has errors: %s" % (ffixedXfooter0.errors))
        return put_json_messages('error: ' + str( ffixedXfooter0.form_name ))
 

    return locals()

@action('fixedXtopnav', method=["GET", "POST"] )
@action.uses(Template('fixed-topnav.html', delimiters='[%[ ]]',), db, session, T,)

def fixedXtopnav():
    ctrl_info= "ctrl: fixedXtopnav, view: fixed-topnav.html"
    page_url = "\'" + URL('fixedXtopnav' ) + "\'"
    messages = []

    ffixedXtopnav0= Form(db.dffixedXtopnav0, dbio=False, formstyle=FormStyleBulma)

    if ffixedXtopnav0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( ffixedXtopnav0, db.dffixedXtopnav0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( ffixedXtopnav0.form_name ))
    elif ffixedXtopnav0.errors:
        print("ffixedXtopnav0 has errors: %s" % (ffixedXtopnav0.errors))
        return put_json_messages('error: ' + str( ffixedXtopnav0.form_name ))
 

    return locals()

@action('invoiceXprint', method=["GET", "POST"] )
@action.uses(Template('invoice-print.html', delimiters='[%[ ]]',), db, session, T,)

def invoiceXprint():
    ctrl_info= "ctrl: invoiceXprint, view: invoice-print.html"
    page_url = "\'" + URL('invoiceXprint' ) + "\'"
    messages = []

    rows_tinvoiceXprint0= db(db.tinvoiceXprint0).select()
    rows_tinvoiceXprint1= db(db.tinvoiceXprint1).select()
    return locals()

@action('languageXmenu', method=["GET", "POST"] )
@action.uses(Template('language-menu.html', delimiters='[%[ ]]',), db, session, T,)

def languageXmenu():
    ctrl_info= "ctrl: languageXmenu, view: language-menu.html"
    page_url = "\'" + URL('languageXmenu' ) + "\'"
    messages = []

    flanguageXmenu0= Form(db.dflanguageXmenu0, dbio=False, formstyle=FormStyleBulma)

    if flanguageXmenu0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( flanguageXmenu0, db.dflanguageXmenu0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( flanguageXmenu0.form_name ))
    elif flanguageXmenu0.errors:
        print("flanguageXmenu0 has errors: %s" % (flanguageXmenu0.errors))
        return put_json_messages('error: ' + str( flanguageXmenu0.form_name ))
 

    return locals()

@action('fixedXsidebar', method=["GET", "POST"] )
@action.uses(Template('fixed-sidebar.html', delimiters='[%[ ]]',), db, session, T,)

def fixedXsidebar():
    ctrl_info= "ctrl: fixedXsidebar, view: fixed-sidebar.html"
    page_url = "\'" + URL('fixedXsidebar' ) + "\'"
    messages = []

    ffixedXsidebar0= Form(db.dffixedXsidebar0, dbio=False, formstyle=FormStyleBulma)

    if ffixedXsidebar0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( ffixedXsidebar0, db.dffixedXsidebar0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( ffixedXsidebar0.form_name ))
    elif ffixedXsidebar0.errors:
        print("ffixedXsidebar0 has errors: %s" % (ffixedXsidebar0.errors))
        return put_json_messages('error: ' + str( ffixedXsidebar0.form_name ))
 

    return locals()

@action('projectXdetail', method=["GET", "POST"] )
@action.uses(Template('project-detail.html', delimiters='[%[ ]]',), db, session, T,)

def projectXdetail():
    ctrl_info= "ctrl: projectXdetail, view: project-detail.html"
    page_url = "\'" + URL('projectXdetail' ) + "\'"
    messages = []

    fprojectXdetail0= Form(db.dfprojectXdetail0, dbio=False, formstyle=FormStyleBulma)

    if fprojectXdetail0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fprojectXdetail0, db.dfprojectXdetail0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fprojectXdetail0.form_name ))
    elif fprojectXdetail0.errors:
        print("fprojectXdetail0 has errors: %s" % (fprojectXdetail0.errors))
        return put_json_messages('error: ' + str( fprojectXdetail0.form_name ))
 

    return locals()

@action('forgotXpassword', method=["GET", "POST"] )
@action.uses(Template('forgot-password.html', delimiters='[%[ ]]',), db, session, T,)

def forgotXpassword():
    ctrl_info= "ctrl: forgotXpassword, view: forgot-password.html"
    page_url = "\'" + URL('forgotXpassword' ) + "\'"
    messages = []

    fforgotXpassword0= Form(db.dfforgotXpassword0, dbio=False, formstyle=FormStyleBulma)

    if fforgotXpassword0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fforgotXpassword0, db.dfforgotXpassword0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fforgotXpassword0.form_name ))
    elif fforgotXpassword0.errors:
        print("fforgotXpassword0 has errors: %s" % (fforgotXpassword0.errors))
        return put_json_messages('error: ' + str( fforgotXpassword0.form_name ))
 

    return locals()

@action('topXnavXsidebar', method=["GET", "POST"] )
@action.uses(Template('top-nav-sidebar.html', delimiters='[%[ ]]',), db, session, T,)

def topXnavXsidebar():
    ctrl_info= "ctrl: topXnavXsidebar, view: top-nav-sidebar.html"
    page_url = "\'" + URL('topXnavXsidebar' ) + "\'"
    messages = []

    ftopXnavXsidebar0= Form(db.dftopXnavXsidebar0, dbio=False, formstyle=FormStyleBulma)

    if ftopXnavXsidebar0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( ftopXnavXsidebar0, db.dftopXnavXsidebar0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( ftopXnavXsidebar0.form_name ))
    elif ftopXnavXsidebar0.errors:
        print("ftopXnavXsidebar0 has errors: %s" % (ftopXnavXsidebar0.errors))
        return put_json_messages('error: ' + str( ftopXnavXsidebar0.form_name ))
 

    return locals()

@action('enhancedXresults', method=["GET", "POST"] )
@action.uses(Template('enhanced-results.html', delimiters='[%[ ]]',), db, session, T,)

def enhancedXresults():
    ctrl_info= "ctrl: enhancedXresults, view: enhanced-results.html"
    page_url = "\'" + URL('enhancedXresults' ) + "\'"
    messages = []

    fenhancedXresults0= Form(db.dfenhancedXresults0, dbio=False, formstyle=FormStyleBulma)

    if fenhancedXresults0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fenhancedXresults0, db.dfenhancedXresults0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fenhancedXresults0.form_name ))
    elif fenhancedXresults0.errors:
        print("fenhancedXresults0 has errors: %s" % (fenhancedXresults0.errors))
        return put_json_messages('error: ' + str( fenhancedXresults0.form_name ))
 

    fenhancedXresults1= Form(db.dfenhancedXresults1, dbio=False, formstyle=FormStyleBulma)

    if fenhancedXresults1.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fenhancedXresults1, db.dfenhancedXresults1 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fenhancedXresults1.form_name ))
    elif fenhancedXresults1.errors:
        print("fenhancedXresults1 has errors: %s" % (fenhancedXresults1.errors))
        return put_json_messages('error: ' + str( fenhancedXresults1.form_name ))
 

    return locals()

@action('legacyXuserXmenu', method=["GET", "POST"] )
@action.uses(Template('legacy-user-menu.html', delimiters='[%[ ]]',), db, session, T,)

def legacyXuserXmenu():
    ctrl_info= "ctrl: legacyXuserXmenu, view: legacy-user-menu.html"
    page_url = "\'" + URL('legacyXuserXmenu' ) + "\'"
    messages = []

    flegacyXuserXmenu0= Form(db.dflegacyXuserXmenu0, dbio=False, formstyle=FormStyleBulma)

    if flegacyXuserXmenu0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( flegacyXuserXmenu0, db.dflegacyXuserXmenu0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( flegacyXuserXmenu0.form_name ))
    elif flegacyXuserXmenu0.errors:
        print("flegacyXuserXmenu0 has errors: %s" % (flegacyXuserXmenu0.errors))
        return put_json_messages('error: ' + str( flegacyXuserXmenu0.form_name ))
 

    return locals()

@action('recoverXpassword', method=["GET", "POST"] )
@action.uses(Template('recover-password.html', delimiters='[%[ ]]',), db, session, T,)

def recoverXpassword():
    ctrl_info= "ctrl: recoverXpassword, view: recover-password.html"
    page_url = "\'" + URL('recoverXpassword' ) + "\'"
    messages = []

    frecoverXpassword0= Form(db.dfrecoverXpassword0, dbio=False, formstyle=FormStyleBulma)

    if frecoverXpassword0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( frecoverXpassword0, db.dfrecoverXpassword0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( frecoverXpassword0.form_name ))
    elif frecoverXpassword0.errors:
        print("frecoverXpassword0 has errors: %s" % (frecoverXpassword0.errors))
        return put_json_messages('error: ' + str( frecoverXpassword0.form_name ))
 

    return locals()

@action('collapsedXsidebar', method=["GET", "POST"] )
@action.uses(Template('collapsed-sidebar.html', delimiters='[%[ ]]',), db, session, T,)

def collapsedXsidebar():
    ctrl_info= "ctrl: collapsedXsidebar, view: collapsed-sidebar.html"
    page_url = "\'" + URL('collapsedXsidebar' ) + "\'"
    messages = []

    fcollapsedXsidebar0= Form(db.dfcollapsedXsidebar0, dbio=False, formstyle=FormStyleBulma)

    if fcollapsedXsidebar0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fcollapsedXsidebar0, db.dfcollapsedXsidebar0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fcollapsedXsidebar0.form_name ))
    elif fcollapsedXsidebar0.errors:
        print("fcollapsedXsidebar0 has errors: %s" % (fcollapsedXsidebar0.errors))
        return put_json_messages('error: ' + str( fcollapsedXsidebar0.form_name ))
 

    return locals()

@action('forgotXpasswordXv2', method=["GET", "POST"] )
@action.uses(Template('forgot-password-v2.html', delimiters='[%[ ]]',), db, session, T,)

def forgotXpasswordXv2():
    ctrl_info= "ctrl: forgotXpasswordXv2, view: forgot-password-v2.html"
    page_url = "\'" + URL('forgotXpasswordXv2' ) + "\'"
    messages = []

    fforgotXpasswordXv20= Form(db.dfforgotXpasswordXv20, dbio=False, formstyle=FormStyleBulma)

    if fforgotXpasswordXv20.accepted:
        mess1 = 'accepted: ' if prn_form_vars( fforgotXpasswordXv20, db.dfforgotXpasswordXv20 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( fforgotXpasswordXv20.form_name ))
    elif fforgotXpasswordXv20.errors:
        print("fforgotXpasswordXv20 has errors: %s" % (fforgotXpasswordXv20.errors))
        return put_json_messages('error: ' + str( fforgotXpasswordXv20.form_name ))
 

    return locals()

@action('recoverXpasswordXv2', method=["GET", "POST"] )
@action.uses(Template('recover-password-v2.html', delimiters='[%[ ]]',), db, session, T,)

def recoverXpasswordXv2():
    ctrl_info= "ctrl: recoverXpasswordXv2, view: recover-password-v2.html"
    page_url = "\'" + URL('recoverXpasswordXv2' ) + "\'"
    messages = []

    frecoverXpasswordXv20= Form(db.dfrecoverXpasswordXv20, dbio=False, formstyle=FormStyleBulma)

    if frecoverXpasswordXv20.accepted:
        mess1 = 'accepted: ' if prn_form_vars( frecoverXpasswordXv20, db.dfrecoverXpasswordXv20 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( frecoverXpasswordXv20.form_name ))
    elif frecoverXpasswordXv20.errors:
        print("frecoverXpasswordXv20 has errors: %s" % (frecoverXpasswordXv20.errors))
        return put_json_messages('error: ' + str( frecoverXpasswordXv20.form_name ))
 

    return locals()

@action('fixedXsidebarXcustom', method=["GET", "POST"] )
@action.uses(Template('fixed-sidebar-custom.html', delimiters='[%[ ]]',), db, session, T,)

def fixedXsidebarXcustom():
    ctrl_info= "ctrl: fixedXsidebarXcustom, view: fixed-sidebar-custom.html"
    page_url = "\'" + URL('fixedXsidebarXcustom' ) + "\'"
    messages = []

    ffixedXsidebarXcustom0= Form(db.dffixedXsidebarXcustom0, dbio=False, formstyle=FormStyleBulma)

    if ffixedXsidebarXcustom0.accepted:
        mess1 = 'accepted: ' if prn_form_vars( ffixedXsidebarXcustom0, db.dffixedXsidebarXcustom0 ) == False else 'inserted: '
        return put_json_messages(mess1 + str( ffixedXsidebarXcustom0.form_name ))
    elif ffixedXsidebarXcustom0.errors:
        print("ffixedXsidebarXcustom0 has errors: %s" % (ffixedXsidebarXcustom0.errors))
        return put_json_messages('error: ' + str( ffixedXsidebarXcustom0.form_name ))
 

    return locals()


from pydal.restapi import RestAPI, Policy

policy = Policy()

policy.set('*', 'GET', authorize=True, allowed_patterns=['*'])
policy.set('*', 'PUT', authorize=True)
policy.set('*', 'POST', authorize=True)
policy.set('*', 'DELETE', authorize=True)

@action('api/<tablename>/', method=["GET", "POST", "PUT", "DELETE"])
@action('api/<tablename>/<rec_id>', method=["GET", "POST", "PUT", "DELETE"])
def api(tablename, rec_id=None):
    return RestAPI(db, policy)(request.method,
                               tablename,
                               rec_id,
                               request.GET,
                               request.POST
                               )
# 
# curl -X  GET   http://localhost:8000/lte3/api/test_table/
# curl -X  GET   http://localhost:8000/lte3/api/test_table/9
# curl -X DELETE  http://localhost:8000/lte3/api/test_table/2
# curl -X POST -d 'f0=1111111&f1=2222222222&f2=33333333333' http://localhost:8000/lte3/api/test_table/
# curl -X PUT -d 'f0=1111111&f1=2222222222&f2=33333333333' http://localhost:8000/lte3/api/test_table/9
# curl -X POST -d f0=1111111   -d f1=2222222222 -d f2=8888888888  http://localhost:8000/lte3/api/test_table/
#
#  pip install httpie
#  http         localhost:8000/lte3/api/test_table/
#  http         localhost:8000/lte3/api/test_table/9
#  http -f POST localhost:8000/lte3/api/test_table/ f0=111111 f1=2222222 f2=333333
#  http -f DELETE localhost:8000/lte3/api/test_table/2
#  http -f PUT localhost:8000/lte3/api/test_table/2 f0=111111 f1=2222222 f2=333333


@bottle.error(404)
def error404(error):

    func_mess = []

    def check_rule(maybe_app_root):
        for e in Reloader.ROUTES:
            if ('rule' in e ) and ( e["rule"] == maybe_app_root) :
                Glb["debug"] and func_mess.append(f"     found_rule: {e['rule']}")
                return True
        return False

    location = "/" + Glb["my_app_name"]
    lx = bottle.request.path.split("/", 2)

    if len(lx) >= 2 and check_rule("/" + lx[1]):
        location = "/" + lx[1]
        files_prefix = location + Glb["tte_path"]

        location_2x = location + location + "/"
        files_prefix_2x = files_prefix + files_prefix + "/"

        def rm_bad_prefix(bad_prefix):
            new_location = bottle.request.path.replace(bad_prefix, "", 1)
            Glb["debug"] and func_mess.append(f"     rm_bad_prefix: {bad_prefix}")
            return new_location

        if bottle.request.path.startswith(files_prefix_2x):
            if len(bottle.request.path) > len(files_prefix_2x):
                location = rm_bad_prefix(files_prefix)

        elif bottle.request.path.startswith(location_2x):
            if len(bottle.request.path) > len(location_2x):
                location = rm_bad_prefix(location)
    if Glb["debug"]:
        debug_mess = [  f"404  app=/{Glb['my_app_name']}, err_path={bottle.request.path}",
                        f"     info: {error}", ]
        if len(func_mess):
            debug_mess += func_mess
        debug_mess.append(f"     goto_new_path: {location}\n")
        print("\n".join(debug_mess))

    bottle.response.status = 303
    bottle.response.set_header("Location", location)

