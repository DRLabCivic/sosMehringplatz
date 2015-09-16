package org.drl.lutz.sosmehringplatzapp.main.activities;

import android.content.Intent;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;

import org.drl.lutz.sosmehringplatzapp.R;

public class SelectInputActivity extends FullscreenActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_select_input);

        setIdleCloseTimer(getResources().getInteger(R.integer.idleTime));
    }

    public void onButtonClicked(View view) {
        //showAlert("Button","clicked");
    }

    public void transitionNext() {

    }

    public void onTextButtonClicked(View view) {
        startActivity(new Intent(this, TextActivity.class));
        finish();
    }
}
